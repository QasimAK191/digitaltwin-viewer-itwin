import { Decorator, IModelConnection, ScreenViewport, Marker, DecorateContext } from '@itwin/core-frontend';
import { XAndY, XYAndZ } from '@itwin/core-geometry';

export class SmartDeviceMarker extends Marker {
    private _smartDeviceId: string;
    private _smartDeviceType: string;

    constructor(location:XYAndZ, size:XAndY, smartDeviceId: string, smartDeviceType: string) {
        super(location, size);

        this._smartDeviceId = smartDeviceId;
        this._smartDeviceType = smartDeviceType;

        

        this.setImageUrl(`/${this._smartDeviceType}.png`);
        this.title = this._smartDeviceId;
    }
}