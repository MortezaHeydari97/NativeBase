import type { StyledProps } from '../../../theme/types';
import type { FlatListProps } from 'react-native';
import type { PlatformProps } from '../../types';

export interface IFlatListProps
  extends FlatListProps<any>,
    StyledProps,
    PlatformProps<IFlatListProps> {
  /**
   * pass props to contentContainerStyle, and this also resolved NB tokens.
   */
  _contentContainerStyle?: IFlatListProps;
}
