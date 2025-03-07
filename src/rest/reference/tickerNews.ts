// CF: https://polygon.io/docs/stocks/get_v2_reference_news

import { get, IPolygonQuery } from "../transport/request";
import { Order } from "./tickers";

export type Publisher = {
  favicon_url?: string;
  homepage_url?: string;
  logo_url?: string;
  name?: string;
};

export interface ITickerNewsQuery extends IPolygonQuery {
  ticker?:
    | string
    | {
        lt?: string;
        lte?: string;
        gt?: string;
        gte?: string;
      };
  published_utc?: string;
  order?: Order;
  limit?: number;
  sort?: string;
}

export interface ITickerNewsResults {
  amp_url?: string;
  article_url?: string;
  author?: string;
  description?: string;
  id: string;
  image_url?: string;
  keywords?: string[];
  published_utc: string;
  publisher: Publisher;
  tickers: string[];
  title: string;
}

export interface ITickerNews {
  status: string;
  request_id: string;
  count: number;
  previous_url?: string;
  next_url?: string;
  results: ITickerNewsResults[];
}

export const tickerNews = async (
  apiKey: string,
  apiBase: string,
  query?: ITickerNewsQuery
): Promise<ITickerNews> => get(`/v2/reference/news`, apiKey, apiBase, query);
