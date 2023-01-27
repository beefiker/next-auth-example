import { t } from 'i18next';

/**
 * 조치 계획 입력 상한일 MAX 값
 * 형상 관리 분석 - 관리자 설정
 */
export const ACTION_PLAN_DAY = 999;

/**
 * MAX 입력값
 * 관리자 설정 - 삭제
 */
export const DELETE_MAX_DAY = 999;

/**
 * useUrlQueryPagination 훅에서 사용하는 딜레이ms
 * URL PAGINATION DEBOUNCE DELAY
 */
export const ROUTER_QUERY_DEBOUNCE_DELAY = 300;

/**
 * CVSS 툴팁 메시지
 */

export const CVSS_V2_TOOLTIP_MSG = `${t('tooltip.cvssV2')}`;
export const CVSS_V3_TOOLTIP_MSG = `${t('tooltip.cvssV3')}`;

/**
 * 패치 버전이 없을 경우 툴팁 메시지
 */
export const NO_RELEASE_PATCH_VERSION_TOOLTIP_MSG = `${t('tooltip.noReleasePatchVersion')}`;

/**
 * react-ranger 핸들러 최대 수치
 */
export const MAX_CVSS_VALUE = 10;

/**
 * 컴포넌트 검색기능 최대 표현 수
 */
export const MIN_KEYWORD_LENGTH = 3;
export const MAX_VERSION_LENGTH_IN_COMPONENT = 12;
export const MAX_VERSION_LIST_LENGTH_IN_COMPONENT = 10;
export const MINIMUM_ITEM_AMOUNT = 10;
export const LOAD_ITEM_AMOUNT = 10;
/**
 * 컴포넌트 검색기능 NoData 텍스트
 */

// NoData Texts
export const NO_VULNERABILITIES_DATA = 'No Vulnerabilities Data';
export const NO_FILEFUNC_DATA = 'No Files/Functions Data';
export const NO_LIBRARIES_DATA = 'No Libraries Data';
export const NO_README_DATA = 'No Readme Data';
export const NO_DEPENDENCY_TREE_DATA = 'No Dependency Tree Data';
export const NO_DEPENDENCY_DATA = 'No Dependency Data';
export const NO_SECURITY_TREND_DATA = 'No Security Trend Data';
export const NO_AFFECTED_COMPONENTS_DATA = 'No Affected Components Data';
export const NO_AFFECTED_LIBRARIES_DATA = 'No Affected Libraries Data';
export const NO_CPES_DATA = 'No CPEs Data';
export const NO_CVES_DATA = 'No CVEs Data';
export const NO_TERMS_DATA = 'No Terms Data';
export const NO_CWES_DATA = 'No CWEs Data';
export const NO_REFERENCES_DATA = 'No References Data';
export const NO_POPULARITY_DATA = 'No Popularity Data';
export const NO_REPOSITORY_DATA = 'No Repository Data';
export const NO_TAG_DATA = 'No Tag Data';
export const NO_VERSION_DATA = 'No Library Version Data';

/**
 * 자가 분석 통계 차트 표현 수
 */
export const DRAW_SELF_ANALYSIS_CHART_LENGTH = 10;

/**
 * cvss v2 / v3 범위 영역에 대한 값
 */

export const CVSS_SEVERITY_RANGE = {
  cvss2_high_begin: 7,
  cvss2_high_end: 10,
  cvss2_medium_begin: 4,
  cvss2_medium_end: 6.9,
  cvss2_low_begin: 0,
  cvss2_low_end: 3.9,
  cvss3_critical_begin: 9,
  cvss3_critical_end: 10,
  cvss3_high_begin: 7,
  cvss3_high_end: 8.9,
  cvss3_medium_begin: 4,
  cvss3_medium_end: 6.9,
  cvss3_low_end: 3.9,
  cvss3_low_begin: 0.1,
  cvss3_none_end: 0,
  cvss3_none_begin: 0,
};
