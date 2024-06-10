import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentFolderPath = path.resolve(__dirname, '../components');

async function createFolder(name) {
  const folderPath = path.resolve(componentFolderPath, `./${name}`);
  await fs.mkdir(folderPath, {});
} // function createFolder

async function generateStyles(name) {
  const code = `\
import { SxProps, Theme } from '@mui/material';

export interface SxStylesProps {
  sx?: SxProps<Theme>;
} // interface SxStylesProps

export function sxStyles({
  sx,
}: SxStylesProps) {
  return {
    root: [
      {},
      ...(Array.isArray(sx) ? sx : [sx]),
    ], // root
  };
}; // sxStyles
`;
  const filePath = path.resolve(componentFolderPath, `./${name}/${name}.styles.tsx`);
  await fs.writeFile(filePath, code, { encoding: 'utf8' });
} // function generateStyles

async function generateComponent(name) {
  const code = `\
import { Container, SxProps, Theme } from '@mui/material';
import { sxStyles } from './${name}.styles';
  
export interface ${name}Props {
  sx?: SxProps<Theme>;
} // interface ${name}Props

export default function ${name}({
  sx
}: ${name}Props) {
  const styles = sxStyles({ sx });
  return (
    <Container
      data-testid='${name}'
      sx={styles.root}
    >
      Stub text, meant to be replaced.
    </Container>
  );
} // function ${name}
`;
  const filePath = path.resolve(componentFolderPath, `./${name}/${name}.tsx`);
  await fs.writeFile(filePath, code, { encoding: 'utf8' });
} // function generateComponent

async function generateStories(name) {
  const code = `\
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeWrapper } from '../../common/themes';
import { ${name}, type ${name}Props } from '.';

export default {
  component: ${name},
  argTypes: {
    sx: { control: false },
  },
} satisfies Meta<${name}Props>; // meta

export const Base: StoryObj<${name}Props> = {
  args: {
  } satisfies ${name}Props,

  render(props: ${name}Props) {
    return (
      <ThemeWrapper>
        <${name} {...props} />
      </ThemeWrapper>
    );
  },
}; // const Base
`;
  const filePath = path.resolve(componentFolderPath, `./${name}/${name}.stories.tsx`);
  await fs.writeFile(filePath, code, { encoding: 'utf8' });
} // function generateStories

async function generateIndex(name) {
  const code = `\
export {
  default as ${name},
  type ${name}Props,
} from './${name}';
`;
  const filePath = path.resolve(componentFolderPath, `./${name}/index.ts`);
  await fs.writeFile(filePath, code, { encoding: 'utf8' });
} // function generateIndex

async function generateCode(name) {
  await createFolder(name);
  await generateStyles(name);
  await generateComponent(name);
  await generateStories(name);
  await generateIndex(name);
  console.log(`Created files for component ${name}.`);
} // function generateCode

export default async function main() {
  for (const componentName of process.argv.slice(2)) {
    await generateCode(componentName);
  }
} // function main

if (__filename === process.argv[1]) {
  main().then(() => process.exit(0));
}