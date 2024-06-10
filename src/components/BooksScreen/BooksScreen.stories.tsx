import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import { ThemeWrapper } from '../../common/themes';
import { QueryClientWrapper } from '../../common/query';
import { fakeSearch } from '../../../test/fixtures/openLibrary';
import { baseURL } from '../../services/openLibrary';
import { BooksScreen } from '.';

export default {
  component: BooksScreen,
  decorators: [
    (Story) => (
      <ThemeWrapper>
        <QueryClientWrapper>
          <Story />
        </QueryClientWrapper>
      </ThemeWrapper>
    ),
  ]
} satisfies Meta; // meta

export const Base: StoryObj = {
  render() {
    return (
      <BooksScreen />
    );
  },
}; // const Base

export const MockedAPI_Success: StoryObj = {
  parameters: {
    msw: {
      handlers: [
        http.get(`${baseURL}search.json`, ({ request }) => {
          const requestURL = new URL(request.url);
          const q = requestURL.searchParams.get('q');
          return HttpResponse.json(fakeSearch(q ?? ''));
        }),
      ],
    },
  }, // parameters

  render() {
    return (
      <BooksScreen />
    );
  },
}; // const MockedAPI_Success

export const MockedAPI_Error: StoryObj = {
  parameters: {
    msw: {
      handlers: [
        http.get(`${baseURL}search.json`, () => {
          return HttpResponse.json({}, { status: 404 });
        }),
      ],
    },
  }, // parameters

  render() {
    return (
      <BooksScreen />
    );
  },
}; // const MockedAPI_Error
