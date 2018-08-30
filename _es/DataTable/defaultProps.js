import { noop } from "lodash";

export default {
  //NOTE: DO NOT SET DEFAULTS HERE FOR PROPS THAT GET COMPUTED AS PART OF PRESET GROUPS IN computePresets
  entities: [],
  noHeader: false,
  pageSize: 10,
  extraClasses: "",
  className: "",
  page: 1,
  style: {},
  isLoading: false,
  isCopyable: true,
  disabled: false,
  noSelect: false,
  noUserSelect: false,
  maxHeight: 800,
  isSimple: false,
  reduxFormSearchInput: {},
  reduxFormSelectedEntityIdMap: {},
  reduxFormExpandedEntityIdMap: {},
  isEntityDisabled: noop,
  setSearchTerm: noop,
  setFilter: noop,
  showCount: false,
  clearFilters: noop,
  setPageSize: noop,
  setOrder: noop,
  setPage: noop,
  contextMenu: noop,
  onDoubleClick: noop,
  onRowSelect: noop,
  onRowClick: noop,
  onMultiRowSelect: noop,
  onSingleRowSelect: noop,
  onDeselect: noop,
  addFilters: noop,
  removeSingleFilter: noop,
  resizePersist: noop,
  resized: [],
  filters: [],
  isSingleSelect: false,
  withCheckboxes: false,
  withSort: true
};