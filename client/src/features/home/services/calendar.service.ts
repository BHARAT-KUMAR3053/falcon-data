import { Dayjs } from 'dayjs';
import { IResponse } from 'src/shared/shared.interface';
import { api } from 'src/store/api';

export const calendarApi = api.injectEndpoints({
  endpoints: (build) => ({
    getList: build.query<IResponse, { firstDay: Dayjs; lastDay: Dayjs }>({
      query: ({ firstDay, lastDay }) => ({
        url: `/calendar?from=${firstDay.format('YYYY-MM-DD')}&to=${lastDay.format('YYYY-MM-DD')}`
      }),
      providesTags: ['list']
    }),
    createList: build.mutation<IResponse, { name: string; email: string; phoneNumber: string; description: string; date: Date }>({
      query(data) {
        return {
          url: '/calendar',
          method: 'POST',
          body: data
        };
      },
      invalidatesTags: ['list']
    })
  })
});

export const { useGetListQuery, useCreateListMutation } = calendarApi;
