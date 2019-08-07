import { Filter } from '../../facet/filter.model';

export const FilterSchema: Filter = {
  callbackInfo: expect.any(Object),
  children: expect.any(Array),
  count: expect.any(Number),
  facet: expect.any(Object),
  id: expect.any(String),
  modelName: expect.any(String),
  parent: expect.nullOr(Object),
  selected: expect.any(Boolean),
  title: expect.any(String),
  value: expect.anything()
};
