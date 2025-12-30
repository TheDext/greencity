import { Placemark, YMaps, Map } from '@pbe/react-yandex-maps';
import classes from './map.module.scss';

export function YandexMap() {
    return (
        <div className={classes.map}>
            <YMaps>
                <Map
                    defaultState={{
                        center: [57.167958, 65.573324],
                        zoom: 19,
                        behaviors: ['default'],
                    }}
                    modules={[
                        'control.ZoomControl',
                        'control.FullscreenControl',
                    ]}
                    width="100%"
                    height="500px"
                >
                    <Placemark
                        geometry={[57.167958, 65.573324]}
                        options={{ draggable: true }}
                    />
                </Map>
            </YMaps>
        </div>
    );
}
