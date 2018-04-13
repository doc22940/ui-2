import styled from 'react-emotion';

import {Box} from '../../layout';

/**
 * Skeleton page header
 */
const SkeletonPageHeader = styled(Box)`
  background-color: #fff;
  border-bottom: 1px solid ${props => props.theme.colors.grey300};
`;

export default SkeletonPageHeader;