import React, { PureComponent } from 'react';
import { Image }                from 'react-native-elements';

import Spinner                  from '../Spinner';

export default class CustomImage extends PureComponent {
    render() {
        return (
            <Image
                PlaceholderContent = {<Spinner />}
                {...this.props}
            />
        );
    }
}
