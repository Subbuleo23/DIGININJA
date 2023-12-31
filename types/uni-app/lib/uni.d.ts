/**
 * Uni 实例变量
 */
declare const uni: Uni;

declare class Uni {
    /**
     * 将 Base64 字符串转成 ArrayBuffer 对象
     *
     * 参考: [http://uniapp.dcloud.io/api/base64ToArrayBuffer?id=base64toarraybuffer](http://uniapp.dcloud.io/api/base64ToArrayBuffer?id=base64toarraybuffer)
     */
    base64ToArrayBuffer(base64?: string): ArrayBuffer;
    /**
     * 将 ArrayBuffer 对象转成 Base64 字符串
     *
     * 参考: [http://uniapp.dcloud.io/api/arrayBufferToBase64?id=arraybuffertobase64](http://uniapp.dcloud.io/api/arrayBufferToBase64?id=arraybuffertobase64)
     */
    arrayBufferToBase64(arrayBuffer?: ArrayBuffer): string;
    /**
     * 监听自定义事件。事件可以由 uni.$emit 触发。回调函数会接收 uni.$emit 传递的参数。
     *
     * 参考: [http://uniapp.dcloud.io/api/window/communication?id=on](http://uniapp.dcloud.io/api/window/communication?id=on)
     */
    $on(eventName?: string, callback?: () => void): void;
    /**
     * 触发自定义事件，附加的参数会传递给事件监听器。
     *
     * 参考: [http://uniapp.dcloud.io/api/window/communication?id=emit](http://uniapp.dcloud.io/api/window/communication?id=emit)
     */
    $emit(eventName?: string, param?: any): void;
    /**
     * 监听一个自定义事件。事件只触发一次，在第一次触发之后移除事件监听器。
     *
     * 参考: [http://uniapp.dcloud.io/api/window/communication?id=once](http://uniapp.dcloud.io/api/window/communication?id=once)
     */
    $once(eventName?: string, callback?: () => void): void;
    /**
     * 移除自定义事件监听器。如果没有指定事件名，则移除所有事件监听器。如果提供事件名，则移除该事件的所有监听器。如果提供了事件名和回调，则只移除这个回调的监听器。
     *
     * 参考: [http://uniapp.dcloud.io/api/window/communication?id=off](http://uniapp.dcloud.io/api/window/communication?id=off)
     */
    $off(eventName?: string | any[], callback?: () => void): void;
    /**
     * 通过id 获取 subNVues 原生子窗体的实例
     *
     * 参考: [http://uniapp.dcloud.io/api/window/subNVues?id=app-getsubnvuebyid](http://uniapp.dcloud.io/api/window/subNVues?id=app-getsubnvuebyid)
     */
    getSubNVueById(subNvueId?: string): SubNVue;
    /**
     * 获取当前 subNVues 原生子窗体的实例
     *
     * 参考: [http://uniapp.dcloud.io/api/window/subNVues?id=app-getsubnvuebyid](http://uniapp.dcloud.io/api/window/subNVues?id=app-getsubnvuebyid)
     */
    getCurrentSubNVue(): SubNVue;
    /**
     * 发起网络请求
     *
     * 参考: [http://uniapp.dcloud.io/api/request/request?id=request](http://uniapp.dcloud.io/api/request/request?id=request)
     */
    request(options?: RequestOptions): RequestTask;
    /**
     * 上传文件
     *
     * 参考: [http://uniapp.dcloud.io/api/request/network-file?id=uploadfile](http://uniapp.dcloud.io/api/request/network-file?id=uploadfile)
     */
    uploadFile(options?: UploadFileOption): UploadTask;
    /**
     * 下载文件
     *
     * 参考: [http://uniapp.dcloud.io/api/request/network-file?id=downloadfile](http://uniapp.dcloud.io/api/request/network-file?id=downloadfile)
     */
    downloadFile(options?: DownloadFileOption): DownloadTask;
    /**
     * 导入原生插件
     *
     * 参考: [http://uniapp.dcloud.io/api/request/network-file?id=downloadfile](http://uniapp.dcloud.io/api/request/network-file?id=downloadfile)
     */
    requireNativePlugin(moduleName?: string): void;
    /**
     * upx 换算为 px
     *
     * 参考: [http://uniapp.dcloud.io/frame?id=upx2px](http://uniapp.dcloud.io/frame?id=upx2px)
     */
    upx2px(upx?: number): number;
    /**
     * 创建一个 WebSocket 连接
     *
     * 参考: [http://uniapp.dcloud.io/api/request/websocket?id=connectsocket](http://uniapp.dcloud.io/api/request/websocket?id=connectsocket)
     */
    connectSocket(options?: ConnectSocketOption): SocketTask;
    /**
     * 监听WebSocket连接打开事件
     *
     * 参考: [http://uniapp.dcloud.io/api/request/websocket?id=onsocketopen](http://uniapp.dcloud.io/api/request/websocket?id=onsocketopen)
     */
    onSocketOpen(options?: (result: OnSocketOpenCallbackResult) => void): void;
    /**
     * 监听WebSocket错误
     *
     * 参考: [http://uniapp.dcloud.io/api/request/websocket?id=onsocketerror](http://uniapp.dcloud.io/api/request/websocket?id=onsocketerror)
     */
    onSocketError(callback?: (result: GeneralCallbackResult) => void): void;
    /**
     * 通过 WebSocket 连接发送数据
     *
     * 参考: [http://uniapp.dcloud.io/api/request/websocket?id=sendsocketmessage](http://uniapp.dcloud.io/api/request/websocket?id=sendsocketmessage)
     */
    sendSocketMessage(options?: SendSocketMessageOptions): void;
    /**
     * 监听WebSocket接受到服务器的消息事件
     *
     * 参考: [http://uniapp.dcloud.io/api/request/websocket?id=onsocketmessage](http://uniapp.dcloud.io/api/request/websocket?id=onsocketmessage)
     */
    onSocketMessage(callback?: (result: OnSocketMessageCallbackResult) => void): void;
    /**
     * 关闭 WebSocket 连接
     *
     * 参考: [http://uniapp.dcloud.io/api/request/websocket?id=closesocket](http://uniapp.dcloud.io/api/request/websocket?id=closesocket)
     */
    closeSocket(options?: CloseSocketOptions): void;
    /**
     * 监听WebSocket关闭
     *
     * 参考: [http://uniapp.dcloud.io/api/request/websocket?id=onsocketclose](http://uniapp.dcloud.io/api/request/websocket?id=onsocketclose)
     */
    onSocketClose(callback?: (result: GeneralCallbackResult) => void): void;
    /**
     * 从本地相册选择图片或使用相机拍照
     *
     * 参考: [http://uniapp.dcloud.io/api/media/image?id=chooseimage](http://uniapp.dcloud.io/api/media/image?id=chooseimage)
     */
    chooseImage(options?: ChooseImageOptions): void;
    /**
     * 预览图片
     *
     * 参考: [http://uniapp.dcloud.io/api/media/image?id=previewimage](http://uniapp.dcloud.io/api/media/image?id=previewimage)
     */
    previewImage(options?: PreviewImageOptions): void;
    /**
     * 预览图片
     *
     * 参考: [http://uniapp.dcloud.io/api/media/image?id=getimageinfo](http://uniapp.dcloud.io/api/media/image?id=getimageinfo)
     */
    getImageInfo(options?: GetImageInfoOptions): void;
    /**
     * 保存图片到系统相册
     *
     * 参考: [http://uniapp.dcloud.io/api/media/image?id=saveimagetophotosalbum](http://uniapp.dcloud.io/api/media/image?id=saveimagetophotosalbum)
     */
    saveImageToPhotosAlbum(options?: SaveImageToPhotosAlbumOptions): void;
    /**
     * 压缩图片
     *
     * 参考: [http://uniapp.dcloud.io/api/media/image?id=compressimage](http://uniapp.dcloud.io/api/media/image?id=compressimage)
     */
    compressImage(options?: CompressImageOptions): void;
    /**
     * 录音管理
     *
     * 参考: [http://uniapp.dcloud.io/api/media/record-manager?id=getrecordermanager](http://uniapp.dcloud.io/api/media/record-manager?id=getrecordermanager)
     */
    getRecorderManager(): RecorderManager;
    /**
     * 获取全局唯一的背景音频管理器 backgroundAudioManager
     *
     * 参考: [http://uniapp.dcloud.io/api/media/background-audio-manager?id=getbackgroundaudiomanager](http://uniapp.dcloud.io/api/media/background-audio-manager?id=getbackgroundaudiomanager)
     */
    getBackgroundAudioManager(): BackgroundAudioManager;
    /**
     * 创建并返回 audio 上下文 audioContext 对象
     *
     * 参考: [http://uniapp.dcloud.io/api/media/audio-context?id=createinneraudiocontext](http://uniapp.dcloud.io/api/media/audio-context?id=createinneraudiocontext)
     */
    createInnerAudioContext(): CreateInnerAudioContext;
    /**
     * 拍摄视频或从手机相册中选视频，返回视频的临时文件路径。
     *
     * 参考: [http://uniapp.dcloud.io/api/media/video?id=choosevideo](http://uniapp.dcloud.io/api/media/video?id=choosevideo)
     */
    chooseVideo(options?: ChooseVideoOptions): void;
    /**
     * 保存视频到系统相册
     *
     * 参考: [http://uniapp.dcloud.io/api/media/video?id=savevideotophotosalbum](http://uniapp.dcloud.io/api/media/video?id=savevideotophotosalbum)
     */
    saveVideoToPhotosAlbum(options?: SaveVideoToPhotosAlbumOptions): void;
    /**
     * 创建并返回 video 上下文 videoContext 对象
     *
     * 参考: [http://uniapp.dcloud.io/api/media/video-context?id=createvideocontext](http://uniapp.dcloud.io/api/media/video-context?id=createvideocontext)
     */
    createVideoContext(videoId?: string, currentComponent?: any): VideoContext;
    /**
     * 创建并返回 camera 组件的上下文 cameraContext 对象
     *
     * 参考: [http://uniapp.dcloud.io/api/media/camera-context](http://uniapp.dcloud.io/api/media/camera-context)
     */
    createCameraContext(): CameraContext;
    /**
     * 保存文件到本地
     *
     * 参考: [http://uniapp.dcloud.io/api/file/file?id=savefile](http://uniapp.dcloud.io/api/file/file?id=savefile)
     */
    saveFile(options?: SaveFileOptions): void;
    /**
     * 获取文件信息
     */
    getFileInfo(options?: GetFileInfoOptions): void;
    /**
     * 获取本地已保存的文件列表
     *
     * 参考: [http://uniapp.dcloud.io/api/file/file?id=getsavedfilelist](http://uniapp.dcloud.io/api/file/file?id=getsavedfilelist)
     */
    getSavedFileList(options?: GetSavedFileListOptions): void;
    /**
     * 获取本地文件的文件信息
     *
     * 参考: [http://uniapp.dcloud.io/api/file/file?id=getsavedfileinfo](http://uniapp.dcloud.io/api/file/file?id=getsavedfileinfo)
     */
    getSavedFileInfo(options?: GetSavedFileInfoOptions): void;
    /**
     * 删除本地存储的文件
     *
     * 参考: [http://uniapp.dcloud.io/api/file/file?id=removesavedfile](http://uniapp.dcloud.io/api/file/file?id=removesavedfile)
     */
    removeSavedFile(options?: RemoveSavedFileOptions): void;
    /**
     * 新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx
     *
     * 参考: [http://uniapp.dcloud.io/api/file/file?id=opendocument](http://uniapp.dcloud.io/api/file/file?id=opendocument)
     */
    openDocument(options?: OpenDocumentOptions): void;
    /**
     * 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口
     *
     * 参考: [http://uniapp.dcloud.io/api/storage/storage?id=setstorage](http://uniapp.dcloud.io/api/storage/storage?id=setstorage)
     */
    setStorage(options?: SetStorageOptions): void;
    /**
     * 将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口
     *
     * 参考: [http://uniapp.dcloud.io/api/storage/storage?id=setstoragesync](http://uniapp.dcloud.io/api/storage/storage?id=setstoragesync)
     */
    setStorageSync(key?: string, value?: any): void;
    /**
     * 从本地缓存中异步获取指定 key 对应的内容
     *
     * 参考: [http://uniapp.dcloud.io/api/storage/storage?id=getstorage](http://uniapp.dcloud.io/api/storage/storage?id=getstorage)
     */
    getStorage(options?: GetStorageOptions): void;
    /**
     * 从本地缓存中同步获取指定 key 对应的内容
     *
     * 参考: [http://uniapp.dcloud.io/api/storage/storage?id=getstoragesync](http://uniapp.dcloud.io/api/storage/storage?id=getstoragesync)
     */
    getStorageSync(key?: string): any;
    /**
     * 异步获取当前 storage 的相关信息
     *
     * 参考: [http://uniapp.dcloud.io/api/storage/storage?id=getstorageinfo](http://uniapp.dcloud.io/api/storage/storage?id=getstorageinfo)
     */
    getStorageInfo(options?: GetStorageInfoOptions): void;
    /**
     * 同步获取当前 storage 的相关信息
     *
     * 参考: [http://uniapp.dcloud.io/api/storage/storage?id=getstorageinfosync](http://uniapp.dcloud.io/api/storage/storage?id=getstorageinfosync)
     */
    getStorageInfoSync(): GetStorageInfoSuccess;
    /**
     * 从本地缓存中异步移除指定 key
     *
     * 参考: [http://uniapp.dcloud.io/api/storage/storage?id=removestorage](http://uniapp.dcloud.io/api/storage/storage?id=removestorage)
     */
    removeStorage(options?: RemoveStorageOptions): void;
    /**
     * 从本地缓存中同步移除指定 key
     *
     * 参考: [http://uniapp.dcloud.io/api/storage/storage?id=removestoragesync](http://uniapp.dcloud.io/api/storage/storage?id=removestoragesync)
     */
    removeStorageSync(key?: string): void;
    /**
     * 清理本地数据缓存
     *
     * 参考: [http://uniapp.dcloud.io/api/storage/storage?id=clearstorage](http://uniapp.dcloud.io/api/storage/storage?id=clearstorage)
     */
    clearStorage(): void;
    /**
     * 同步清理本地数据缓存
     *
     * 参考: [http://uniapp.dcloud.io/api/storage/storage?id=clearstoragesync](http://uniapp.dcloud.io/api/storage/storage?id=clearstoragesync)
     */
    clearStorageSync(): void;
    /**
     * 获取当前的地理位置、速度
     *
     * 参考: [http://uniapp.dcloud.io/api/location/location?id=getlocation](http://uniapp.dcloud.io/api/location/location?id=getlocation)
     */
    getLocation(options?: GetLocationOptions): void;
    /**
     * 打开地图选择位置。
     *
     * 参考: [http://uniapp.dcloud.io/api/location/location?id=chooselocation](http://uniapp.dcloud.io/api/location/location?id=chooselocation)
     */
    chooseLocation(options?: ChooseLocationOptions): void;
    /**
     * 使用地图查看位置
     *
     * 参考: [http://uniapp.dcloud.io/api/location/open-location?id=openlocation](http://uniapp.dcloud.io/api/location/open-location?id=openlocation)
     */
    openLocation(options?: OpenLocationOptions): void;
    /**
     * 创建并返回 map 上下文 mapContext 对象
     *
     * 参考: [http://uniapp.dcloud.io/api/location/map?id=createmapcontext](http://uniapp.dcloud.io/api/location/map?id=createmapcontext)
     */
    createMapContext(mapId?: string, currentComponent?: any): MapContext;
    /**
     * 异步获取系统信息
     *
     * 参考: [http://uniapp.dcloud.io/api/system/info?id=getsysteminfo](http://uniapp.dcloud.io/api/system/info?id=getsysteminfo)
     */
    getSystemInfo(options?: GetSystemInfoOptions): void;
    /**
     * 同步获取系统信息
     *
     * 参考: [http://uniapp.dcloud.io/api/system/info?id=getsysteminfosync](http://uniapp.dcloud.io/api/system/info?id=getsysteminfosync)
     */
    getSystemInfoSync(): GetSystemInfoResult;
    /**
     * 判断uni-app的API，回调，参数，组件等是否在当前版本可用
     *
     * 参考: [http://uniapp.dcloud.io/api/system/info?id=caniuse](http://uniapp.dcloud.io/api/system/info?id=caniuse)
     */
    canIUse(options?: string): boolean;
    /**
     * 获取网络类型
     *
     * 参考: [http://uniapp.dcloud.io/api/system/network?id=getnetworktype](http://uniapp.dcloud.io/api/system/network?id=getnetworktype)
     */
    getNetworkType(options?: GetNetworkTypeOptions): void;
    /**
     * 监听网络状态变化
     *
     * 参考: [http://uniapp.dcloud.io/api/system/network?id=onnetworkstatuschange](http://uniapp.dcloud.io/api/system/network?id=onnetworkstatuschange)
     */
    onNetworkStatusChange(callback?: (result: OnNetworkStatusChangeSuccess) => void): void;
    /**
     * 监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，可使用 uni.stopAccelerometer 停止监听
     *
     * 参考: [http://uniapp.dcloud.io/api/system/accelerometer?id=onaccelerometerchange](http://uniapp.dcloud.io/api/system/accelerometer?id=onaccelerometerchange)
     */
    onAccelerometerChange(callback?: (result: OnAccelerometerChangeSuccess) => void): void;
    /**
     * 开始监听加速度数据
     *
     * 参考: [http://uniapp.dcloud.io/api/system/accelerometer?id=startaccelerometer](http://uniapp.dcloud.io/api/system/accelerometer?id=startaccelerometer)
     */
    startAccelerometer(options?: StartAccelerometerOptions): void;
    /**
     * 停止监听加速度数据
     *
     * 参考: [http://uniapp.dcloud.io/api/system/accelerometer?id=stopaccelerometer](http://uniapp.dcloud.io/api/system/accelerometer?id=stopaccelerometer)
     */
    stopAccelerometer(options?: StopAccelerometerOptions): void;
    /**
     * 监听罗盘数据，频率：5次/秒，接口调用后会自动开始监听，可使用uni.stopCompass停止监听
     *
     * 参考: [http://uniapp.dcloud.io/api/system/compass?id=oncompasschange](http://uniapp.dcloud.io/api/system/compass?id=oncompasschange)
     */
    onCompassChange(callback?: (result: OnCompassChangeSuccess) => void): void;
    /**
     * 开始监听罗盘数据
     *
     * 参考: [http://uniapp.dcloud.io/api/system/compass?id=startcompass](http://uniapp.dcloud.io/api/system/compass?id=startcompass)
     */
    startCompass(options?: StartCompassOptions): void;
    /**
     * 停止监听罗盘数据
     *
     * 参考: [http://uniapp.dcloud.io/api/system/compass?id=stopcompass](http://uniapp.dcloud.io/api/system/compass?id=stopcompass)
     */
    stopCompass(options?: StopCompassOptions): void;
    /**
     * 拨打电话
     *
     * 参考: [http://uniapp.dcloud.io/api/system/phone?id=makephonecall](http://uniapp.dcloud.io/api/system/phone?id=makephonecall)
     */
    makePhoneCall(options?: MakePhoneCallOptions): void;
    /**
     * 调用扫码界面，扫码成功后返回对应的结果
     *
     * 参考: [http://uniapp.dcloud.io/api/system/barcode?id=scancode](http://uniapp.dcloud.io/api/system/barcode?id=scancode)
     */
    scanCode(options?: ScanCodeOptions): void;
    /**
     * 设置系统剪贴板的内容
     *
     * 参考: [http://uniapp.dcloud.io/api/system/clipboard?id=setclipboarddata](http://uniapp.dcloud.io/api/system/clipboard?id=setclipboarddata)
     */
    setClipboardData(options?: SetClipboardDataOptions): void;
    /**
     * 获得系统剪贴板的内容
     *
     * 参考: [http://uniapp.dcloud.io/api/system/clipboard?id=getclipboarddata](http://uniapp.dcloud.io/api/system/clipboard?id=getclipboarddata)
     */
    getClipboardData(options?: GetClipboardDataOptions): void;
    /**
     * 隐藏软键盘
     *
     * 参考: [http://uniapp.dcloud.io/api/key?id=hidekeyboard](http://uniapp.dcloud.io/api/key?id=hidekeyboard)
     */
    hideKeyboard(): void;
    /**
     * 监听键盘高度变化
     *
     * 参考: [http://uniapp.dcloud.io/api/key?id=onkeyboardheightchange](http://uniapp.dcloud.io/api/key?id=onkeyboardheightchange)
     */
    onKeyboardHeightChange(callback?: (result: OnKeyboardHeightChangeResult) => void): void;
    /**
     * 设置屏幕亮度
     *
     * 参考: [http://uniapp.dcloud.io/api/system/brightness?id=setscreenbrightness](http://uniapp.dcloud.io/api/system/brightness?id=setscreenbrightness)
     */
    setScreenBrightness(options?: SetScreenBrightnessOptions): void;
    /**
     * 获取屏幕亮度
     *
     * 参考: [http://uniapp.dcloud.io/api/system/brightness?id=getscreenbrightness](http://uniapp.dcloud.io/api/system/brightness?id=getscreenbrightness)
     */
    getScreenBrightness(options?: GetScreenBrightnessOptions): void;
    /**
     * 设置是否保持常亮状态
     *
     * 参考: [http://uniapp.dcloud.io/api/system/brightness?id=setkeepscreenon](http://uniapp.dcloud.io/api/system/brightness?id=setkeepscreenon)
     */
    setKeepScreenOn(options?: SetKeepScreenOnOptions): void;
    /**
     * 使手机发生较长时间的振动（400ms）
     *
     * 参考: [http://uniapp.dcloud.io/api/system/vibrate?id=vibratelong](http://uniapp.dcloud.io/api/system/vibrate?id=vibratelong)
     */
    vibrateLong(options?: VibrateLongOptions): void;
    /**
     * 使手机发生较短时间的振动（15ms）
     *
     * 参考: [http://uniapp.dcloud.io/api/system/vibrate?id=vibrateshort](http://uniapp.dcloud.io/api/system/vibrate?id=vibrateshort)
     */
    vibrateShort(options?: VibrateShortOptions): void;
    /**
     * 手机通讯录联系人和联系方式的增加
     *
     * 参考: [http://uniapp.dcloud.io/api/system/contact?id=addphonecontact](http://uniapp.dcloud.io/api/system/contact?id=addphonecontact)
     */
    addPhoneContact(options?: AddPhoneContactOptions): void;
    /**
     * 获取已搜索到的iBeacon设备
     *
     * 参考: [http://uniapp.dcloud.io/api/system/ibeacon?id=getbeacons](http://uniapp.dcloud.io/api/system/ibeacon?id=getbeacons)
     */
    getBeacons(options?: GetBeaconsOptions): void;
    /**
     * 开始搜索附近的iBeacon设备
     *
     * 参考: [http://uniapp.dcloud.io/api/system/ibeacon?id=startbeacondiscovery](http://uniapp.dcloud.io/api/system/ibeacon?id=startbeacondiscovery)
     */
    startBeaconDiscovery(options?: StartBeaconDiscoveryOptions): void;
    /**
     * 停止搜索附近的iBeacon设备
     *
     * 参考: [http://uniapp.dcloud.io//api/system/ibeacon?id=stopbeacondiscovery](http://uniapp.dcloud.io//api/system/ibeacon?id=stopbeacondiscovery)
     */
    stopBeaconDiscovery(options?: StopBeaconDiscoveryOptions): void;
    /**
     * 监听iBeacon设备更新
     *
     * 参考: [http://uniapp.dcloud.io/api/system/ibeacon?id=onbeaconupdate](http://uniapp.dcloud.io/api/system/ibeacon?id=onbeaconupdate)
     */
    onBeaconUpdate(callback?: (result: GetBeaconsRes) => void): void;
    /**
     * 监听iBeacon服务状态变化
     *
     * 参考: [http://uniapp.dcloud.io/api/system/ibeacon?id=onbeaconservicechange](http://uniapp.dcloud.io/api/system/ibeacon?id=onbeaconservicechange)
     */
    onBeaconServiceChange(callback?: (result: BeaconService) => void): void;
    /**
     * 关闭蓝牙模块
     *
     * 参考: [http://uniapp.dcloud.io/api/system/bluetooth?id=closebluetoothadapter](http://uniapp.dcloud.io/api/system/bluetooth?id=closebluetoothadapter)
     */
    closeBluetoothAdapter(options?: CloseBluetoothAdapterOptions): void;
    /**
     * 获取本机蓝牙适配器状态
     *
     * 参考: [http://uniapp.dcloud.io/api/system/bluetooth?id=getbluetoothadapterstate](http://uniapp.dcloud.io/api/system/bluetooth?id=getbluetoothadapterstate)
     */
    getBluetoothAdapterState(options?: GetBluetoothAdapterStateOptions): void;
    /**
     * 获取已搜索到的蓝牙设备
     *
     * 参考: [http://uniapp.dcloud.io/api/system/bluetooth?id=getbluetoothdevices](http://uniapp.dcloud.io/api/system/bluetooth?id=getbluetoothdevices)
     */
    getBluetoothDevices(options?: GetBluetoothDevicesOptions): void;
    /**
     * 根据uuid获取处于已连接的设备
     *
     * 参考: [http://uniapp.dcloud.io/api/system/bluetooth?id=getconnectedbluetoothdevices](http://uniapp.dcloud.io/api/system/bluetooth?id=getconnectedbluetoothdevices)
     */
    getConnectedBluetoothDevices(options?: GetConnectedBluetoothDevicesOptions): void;
    /**
     * 监听蓝牙适配器状态变化事件
     *
     * 参考: [http://uniapp.dcloud.io/api/system/bluetooth?id=onbluetoothadapterstatechange](http://uniapp.dcloud.io/api/system/bluetooth?id=onbluetoothadapterstatechange)
     */
    onBluetoothAdapterStateChange(callback?: (result: OnBluetoothAdapterStateChangeResult) => void): void;
    /**
     * 监听搜索到新设备的事件
     *
     * 参考: [http://uniapp.dcloud.io/api/system/bluetooth?id=onbluetoothdevicefound](http://uniapp.dcloud.io/api/system/bluetooth?id=onbluetoothdevicefound)
     */
    onBluetoothDeviceFound(callback?: (result: OnBluetoothDeviceFoundResult) => void): void;
    /**
     * 初始化蓝牙模块
     *
     * 参考: [http://uniapp.dcloud.io/api/system/bluetooth?id=openbluetoothadapter](http://uniapp.dcloud.io/api/system/bluetooth?id=openbluetoothadapter)
     */
    openBluetoothAdapter(options?: OpenBluetoothAdapterOptions): void;
    /**
     * 开始搜索附近的蓝牙设备
     *
     * 参考: [http://uniapp.dcloud.io/api/system/bluetooth?id=startbluetoothdevicesdiscovery](http://uniapp.dcloud.io/api/system/bluetooth?id=startbluetoothdevicesdiscovery)
     */
    startBluetoothDevicesDiscovery(options?: StartBluetoothDevicesDiscoveryOptions): void;
    /**
     * 停止搜寻附近的蓝牙外围设备
     *
     * 参考: [http://uniapp.dcloud.io/api/system/bluetooth?id=stopbluetoothdevicesdiscovery](http://uniapp.dcloud.io/api/system/bluetooth?id=stopbluetoothdevicesdiscovery)
     */
    stopBluetoothDevicesDiscovery(options?: StopBluetoothDevicesDiscoveryOptions): void;
    /**
     * 断开与低功耗蓝牙设备的连接
     *
     * 参考: [http://uniapp.dcloud.io/api/system/ble?id=closebleconnection](http://uniapp.dcloud.io/api/system/ble?id=closebleconnection)
     */
    closeBLEConnection(options?: CloseBLEConnectionOptions): void;
    /**
     * 连接低功耗蓝牙设备
     *
     * 参考: [http://uniapp.dcloud.io/api/system/ble?id=createbleconnection](http://uniapp.dcloud.io/api/system/ble?id=createbleconnection)
     */
    createBLEConnection(options?: CreateBLEConnectionOptions): void;
    /**
     * 获取蓝牙设备指定服务中所有特征值
     *
     * 参考: [http://uniapp.dcloud.io/api/system/ble?id=getbledevicecharacteristics](http://uniapp.dcloud.io/api/system/ble?id=getbledevicecharacteristics)
     */
    getBLEDeviceCharacteristics(options?: GetBLEDeviceCharacteristicsOptions): void;
    /**
     * 获取蓝牙设备的所有服务
     *
     * 参考: [http://uniapp.dcloud.io/api/system/ble?id=getbledeviceservices](http://uniapp.dcloud.io/api/system/ble?id=getbledeviceservices)
     */
    getBLEDeviceServices(options?: GetBLEDeviceServicesOptions): void;
    /**
     * 启用低功耗蓝牙设备特征值变化时的notify功能，订阅特征值
     *
     * 参考: [http://uniapp.dcloud.io/api/system/ble?id=notifyblecharacteristicvaluechange](http://uniapp.dcloud.io/api/system/ble?id=notifyblecharacteristicvaluechange)
     */
    notifyBLECharacteristicValueChange(options?: NotifyBLECharacteristicValueChangeOptions): void;
    /**
     * 监听低功耗蓝牙设备的特征值变化事件
     *
     * 参考: [http://uniapp.dcloud.io/api/system/ble?id=onblecharacteristicvaluechange](http://uniapp.dcloud.io/api/system/ble?id=onblecharacteristicvaluechange)
     */
    onBLECharacteristicValueChange(callback?: (result: OnBLECharacteristicValueChangeSuccess) => void): void;
    /**
     * 监听低功耗蓝牙设备连接状态变化事件
     *
     * 参考: [http://uniapp.dcloud.io/api/system/ble?id=onbleconnectionstatechange](http://uniapp.dcloud.io/api/system/ble?id=onbleconnectionstatechange)
     */
    onBLEConnectionStateChange(callback?: (result: OnBLEConnectionStateChangeSuccess) => void): void;
    /**
     * 读取低功耗蓝牙设备指定特征值的二进制数据值
     *
     * 参考: [http://uniapp.dcloud.io/api/system/ble?id=readblecharacteristicvalue](http://uniapp.dcloud.io/api/system/ble?id=readblecharacteristicvalue)
     */
    readBLECharacteristicValue(options?: ReadBLECharacteristicValueOptions): void;
    /**
     * 向低功耗蓝牙设备指定特征值写入二进制数据
     *
     * 参考: [http://uniapp.dcloud.io/api/system/ble?id=writeblecharacteristicvalue](http://uniapp.dcloud.io/api/system/ble?id=writeblecharacteristicvalue)
     */
    writeBLECharacteristicValue(options?: WriteBLECharacteristicValueOptions): void;
    /**
     * 显示消息提示框
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/prompt?id=showtoast](http://uniapp.dcloud.io/api/ui/prompt?id=showtoast)
     */
    showToast(options?: ShowToastOptions): void;
    /**
     * 显示 loading 提示框
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/prompt?id=showloading](http://uniapp.dcloud.io/api/ui/prompt?id=showloading)
     */
    showLoading(options?: ShowLoadingOptions): void;
    /**
     * 隐藏消息提示框
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/prompt?id=hidetoast](http://uniapp.dcloud.io/api/ui/prompt?id=hidetoast)
     */
    hideToast(): void;
    /**
     * 隐藏 loading 提示框
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/prompt?id=hideloading](http://uniapp.dcloud.io/api/ui/prompt?id=hideloading)
     */
    hideLoading(): void;
    /**
     * 显示模态弹窗
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/prompt?id=showmodal](http://uniapp.dcloud.io/api/ui/prompt?id=showmodal)
     */
    showModal(options?: ShowModalOptions): void;
    /**
     * 显示操作菜单
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/prompt?id=showactionsheet](http://uniapp.dcloud.io/api/ui/prompt?id=showactionsheet)
     */
    showActionSheet(options?: ShowActionSheetOptions): void;
    /**
     * 动态设置当前页面的标题
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/navigationbar?id=setnavigationbartitle](http://uniapp.dcloud.io/api/ui/navigationbar?id=setnavigationbartitle)
     */
    setNavigationBarTitle(options?: SetNavigationBarTitleOptions): void;
    /**
     * 在当前页面显示导航条加载动画
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/navigationbar?id=shownavigationbarloading](http://uniapp.dcloud.io/api/ui/navigationbar?id=shownavigationbarloading)
     */
    showNavigationBarLoading(): void;
    /**
     * 隐藏导航条加载动画
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/navigationbar?id=hidenavigationbarloading](http://uniapp.dcloud.io/api/ui/navigationbar?id=hidenavigationbarloading)
     */
    hideNavigationBarLoading(): void;
    /**
     * 设置导航条颜色
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/navigationbar?id=setnavigationbarcolor](http://uniapp.dcloud.io/api/ui/navigationbar?id=setnavigationbarcolor)
     */
    setNavigationBarColor(options?: SetNavigationbarColorOptions): void;
    /**
     * 动态设置 tabBar 某一项的内容
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/tabbar?id=settabbaritem](http://uniapp.dcloud.io/api/ui/tabbar?id=settabbaritem)
     */
    setTabBarItem(options?: SetTabBarItemOptions): void;
    /**
     * 动态设置 tabBar 的整体样式
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/tabbar?id=settabbarstyle](http://uniapp.dcloud.io/api/ui/tabbar?id=settabbarstyle)
     */
    setTabBarStyle(options?: SetTabBarStyleOptions): void;
    /**
     * 隐藏 tabBar
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/tabbar?id=hidetabbar](http://uniapp.dcloud.io/api/ui/tabbar?id=hidetabbar)
     */
    hideTabBar(options?: HideTabBarOptions): void;
    /**
     * 显示 tabBar
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/tabbar?id=showtabbar](http://uniapp.dcloud.io/api/ui/tabbar?id=showtabbar)
     */
    showTabBar(options?: ShowTabBarOptions): void;
    /**
     * 为 tabBar 某一项的右上角添加文本
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/tabbar?id=settabbarbadge](http://uniapp.dcloud.io/api/ui/tabbar?id=settabbarbadge)
     */
    setTabBarBadge(options?: SetTabBarBadgeOptions): void;
    /**
     * 移除 tabBar 某一项右上角的文本
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/tabbar?id=removetabbarbadge](http://uniapp.dcloud.io/api/ui/tabbar?id=removetabbarbadge)
     */
    removeTabBarBadge(options?: RemoveTabBarBadgeOptions): void;
    /**
     * 显示 tabBar 某一项的右上角的红点
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/tabbar?id=showtabbarreddot](http://uniapp.dcloud.io/api/ui/tabbar?id=showtabbarreddot)
     */
    showTabBarRedDot(options?: ShowTabBarRedDotOptions): void;
    /**
     * 隐藏 tabBar 某一项的右上角的红点
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/tabbar?id=hidetabbarreddot](http://uniapp.dcloud.io/api/ui/tabbar?id=hidetabbarreddot)
     */
    hideTabBarRedDot(options?: HideTabBarRedDotOptions): void;
    /**
     * 监听中间按钮的点击事件
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/tabbar?id=ontabbarmidbuttontap](http://uniapp.dcloud.io/api/ui/tabbar?id=ontabbarmidbuttontap)
     */
    onTabBarMidButtonTap(callback?: () => void): void;
    /**
     * 保留当前页面，跳转到应用内的某个页面
     *
     * 参考: [http://uniapp.dcloud.io/api/router?id=navigateto](http://uniapp.dcloud.io/api/router?id=navigateto)
     */
    navigateTo(options?: NavigateToOptions): void;
    /**
     * 关闭当前页面，跳转到应用内的某个页面
     *
     * 参考: [http://uniapp.dcloud.io/api/router?id=redirectto](http://uniapp.dcloud.io/api/router?id=redirectto)
     */
    redirectTo(options?: RedirectToOptions): void;
    /**
     * 关闭所有页面，打开到应用内的某个页面
     *
     * 参考: [http://uniapp.dcloud.io/api/router?id=relaunch](http://uniapp.dcloud.io/api/router?id=relaunch)
     */
    reLaunch(options?: ReLaunchOptions): void;
    /**
     * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
     *
     * 参考: [http://uniapp.dcloud.io/api/router?id=switchtab](http://uniapp.dcloud.io/api/router?id=switchtab)
     */
    switchTab(options?: SwitchTabOptions): void;
    /**
     * 关闭当前页面，返回上一页面或多级页面
     *
     * 参考: [http://uniapp.dcloud.io/api/router?id=navigateback](http://uniapp.dcloud.io/api/router?id=navigateback)
     */
    navigateBack(options?: NavigateBackOptions): void;
    /**
     * 创建一个动画实例
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/animation?id=createanimation](http://uniapp.dcloud.io/api/ui/animation?id=createanimation)
     */
    createAnimation(options?: CreateAnimationOptions): Animation;
    /**
     * 将页面滚动到目标位置
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/scroll?id=pagescrollto](http://uniapp.dcloud.io/api/ui/scroll?id=pagescrollto)
     */
    pageScrollTo(options?: PageScrollToOptions): void;
    /**
     * 开始下拉刷新
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/pulldown?id=startpulldownrefresh](http://uniapp.dcloud.io/api/ui/pulldown?id=startpulldownrefresh)
     */
    startPullDownRefresh(options?: StartPullDownRefreshOptions): void;
    /**
     * 停止当前页面下拉刷新
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/pulldown?id=stoppulldownrefresh](http://uniapp.dcloud.io/api/ui/pulldown?id=stoppulldownrefresh)
     */
    stopPullDownRefresh(): void;
    /**
     * 返回一个SelectorQuery对象实例
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/nodes-info?id=createselectorquery](http://uniapp.dcloud.io/api/ui/nodes-info?id=createselectorquery)
     */
    createSelectorQuery(): SelectorQuery;
    /**
     * 创建并返回一个 IntersectionObserver 对象实例
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/intersection-observer?id=createintersectionobserver](http://uniapp.dcloud.io/api/ui/intersection-observer?id=createintersectionobserver)
     */
    createIntersectionObserver(options?: CreateIntersectionObserverOptions): IntersectionObserver;
    /**
     * 创建 canvas 绘图上下文
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/canvas?id=createcanvascontext](http://uniapp.dcloud.io/api/ui/canvas?id=createcanvascontext)
     */
    createCanvasContext(canvasId?: string, componentInstance?: any): CanvasContext;
    /**
     * 把当前画布指定区域的内容导出生成指定大小的图片
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/canvas?id=canvastotempfilepath](http://uniapp.dcloud.io/api/ui/canvas?id=canvastotempfilepath)
     */
    canvasToTempFilePath(options?: CanvasToTempFilePathOptions): void;
    /**
     * 描述 canvas 区域隐含的像素数据
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/canvas?id=canvasgetimagedata](http://uniapp.dcloud.io/api/ui/canvas?id=canvasgetimagedata)
     */
    canvasGetImageData(options?: CanvasGetImageDataOptions): void;
    /**
     * 将像素数据绘制到画布
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/canvas?id=canvasputimagedata](http://uniapp.dcloud.io/api/ui/canvas?id=canvasputimagedata)
     */
    canvasPutImageData(options?: CanvasPutImageDataOptions): void;
    /**
     * 监听窗口尺寸变化事件
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/window?id=onwindowresize](http://uniapp.dcloud.io/api/ui/window?id=onwindowresize)
     */
    onWindowResize(callback?: (result: WindowResizeResult) => void): void;
    /**
     * 取消监听窗口尺寸变化事件
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/window?id=offwindowresize](http://uniapp.dcloud.io/api/ui/window?id=offwindowresize)
     */
    offWindowResize(callback?: () => void): void;
    /**
     * 获取服务供应商
     *
     * 参考: [http://uniapp.dcloud.io/api/plugins/provider?id=getprovider](http://uniapp.dcloud.io/api/plugins/provider?id=getprovider)
     */
    getProvider(options?: GetProviderOptions): void;
    /**
     * 登录
     *
     * 参考: [http://uniapp.dcloud.io/api/plugins/login?id=login](http://uniapp.dcloud.io/api/plugins/login?id=login)
     */
    login(options?: LoginOptions): void;
    /**
     * 登录
     *
     * 参考: [http://uniapp.dcloud.io/api/plugins/login?id=unichecksession](http://uniapp.dcloud.io/api/plugins/login?id=unichecksession)
     */
    checkSession(options?: CheckSessionOptions): void;
    /**
     * 获取用户信息
     *
     * 参考: [http://uniapp.dcloud.io/api/plugins/login?id=getuserinfo](http://uniapp.dcloud.io/api/plugins/login?id=getuserinfo)
     */
    getUserInfo(options?: GetUserInfoOptions): void;
    /**
     * 分享
     *
     * 参考: [http://uniapp.dcloud.io/api/plugins/share?id=share](http://uniapp.dcloud.io/api/plugins/share?id=share)
     */
    share(options?: ShareOptions): void;
    /**
     * 支付
     *
     * 参考: [http://uniapp.dcloud.io/api/plugins/payment?id=requestpayment](http://uniapp.dcloud.io/api/plugins/payment?id=requestpayment)
     */
    requestPayment(options?: RequestPaymentOptions): void;
    /**
     * 提前向用户发起授权请求
     *
     * 参考: [http://uniapp.dcloud.io/api/other/authorize?id=authorize](http://uniapp.dcloud.io/api/other/authorize?id=authorize)
     */
    authorize(options?: AuthorizeOptions): void;
    /**
     * 调起客户端小程序设置界面，返回用户设置的操作结果
     *
     * 参考: [http://uniapp.dcloud.io/api/other/authorize?id=opensetting](http://uniapp.dcloud.io/api/other/authorize?id=opensetting)
     */
    openSetting(options?: OpenSettingOptions): void;
    /**
     * 获取用户的当前设置
     *
     * 参考: [http://uniapp.dcloud.io/api/other/setting?id=getsetting](http://uniapp.dcloud.io/api/other/setting?id=getsetting)
     */
    getSetting(options?: GetSettingOptions): void;
    /**
     * 获取用户收货地址。调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址，需要用户授权 scope.address
     *
     * 参考: [http://uniapp.dcloud.io/api/other/choose-address?id=chooseaddress](http://uniapp.dcloud.io/api/other/choose-address?id=chooseaddress)
     */
    chooseAddress(options?: ChooseAddressOptions): void;
    /**
     * 选择用户的发票抬头，需要用户授权 scope.invoiceTitle
     *
     * 参考: [http://uniapp.dcloud.io/api/other/invoice-title?id=chooseinvoicetitle](http://uniapp.dcloud.io/api/other/invoice-title?id=chooseinvoicetitle)
     */
    chooseInvoiceTitle(options?: ChooseInvoiceTitleOptions): void;
    /**
     * 调起客户端小程序设置界面，返回用户设置的操作结果
     *
     * 参考: [http://uniapp.dcloud.io/api/other/open-miniprogram?id=navigatetominiprogram](http://uniapp.dcloud.io/api/other/open-miniprogram?id=navigatetominiprogram)
     */
    navigateToMiniProgram(options?: NavigateToMiniProgramOptions): void;
    /**
     * 跳转回上一个小程序，只有当另一个小程序跳转到当前小程序时才会能调用成功
     *
     * 参考: [http://uniapp.dcloud.io/api/other/open-miniprogram?id=navigatebackminiprogram](http://uniapp.dcloud.io/api/other/open-miniprogram?id=navigatebackminiprogram)
     */
    navigateBackMiniProgram(options?: NavigateBackMiniProgramOptions): void;
    /**
     * 返回全局唯一的版本更新管理器对象： updateManager，用于管理小程序更新
     *
     * 参考: [http://uniapp.dcloud.io/api/other/update?id=getupdatemanager](http://uniapp.dcloud.io/api/other/update?id=getupdatemanager)
     */
    getUpdateManager(): UpdateManager;
    /**
     * 设置是否打开调试开关。此开关对正式版也能生效
     *
     * 参考: [http://uniapp.dcloud.io/api/other/set-enable-debug?id=setenabledebug](http://uniapp.dcloud.io/api/other/set-enable-debug?id=setenabledebug)
     */
    setEnableDebug(options?: SetEnableDebugOptions): void;
    /**
     * 获取第三方平台自定义的数据字段
     *
     * 参考: [http://uniapp.dcloud.io/api/other/get-extconfig?id=getextconfig](http://uniapp.dcloud.io/api/other/get-extconfig?id=getextconfig)
     */
    getExtConfig(options?: GetExtConfigOptions): GetExtConfigRes;
    /**
     * uni.getExtConfig() 的同步版本
     *
     * 参考: [http://uniapp.dcloud.io/api/other/get-extconfig?id=getextconfigsync](http://uniapp.dcloud.io/api/other/get-extconfig?id=getextconfigsync)
     */
    getExtConfigSync(): GetExtConfigSyncRes;
    /**
     * 隐藏分享按钮
     *
     * 参考: [http://uniapp.dcloud.io/api/plugins/share?id=hidesharemenu](http://uniapp.dcloud.io/api/plugins/share?id=hidesharemenu)
     */
    hideShareMenu(options?: HideShareMenuOptions): void;
    /**
     * 动态设置窗口的背景色
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/bgcolor?id=setbackgroundcolor](http://uniapp.dcloud.io/api/ui/bgcolor?id=setbackgroundcolor)
     */
    setBackgroundColor(options?: SetBackgroundColorOptions): void;
    /**
     * 动态设置窗口的背景色
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/bgcolor?id=setbackgroundtextstyle](http://uniapp.dcloud.io/api/ui/bgcolor?id=setbackgroundtextstyle)
     */
    setBackgroundTextStyle(options?: SetBackgroundTextStyleOptions): void;
    /**
     * 监听陀螺仪数据变化事件
     *
     * 参考: [http://uniapp.dcloud.io/api/system/gyroscope?id=ongyroscopechange](http://uniapp.dcloud.io/api/system/gyroscope?id=ongyroscopechange)
     */
    onGyroscopeChange(callback?: (result: OnGyroscopeChangeSuccess) => void): void;
    /**
     * 开始监听陀螺仪数据
     *
     * 参考: [http://uniapp.dcloud.io/api/system/gyroscope?id=startgyroscope](http://uniapp.dcloud.io/api/system/gyroscope?id=startgyroscope)
     */
    startGyroscope(options?: StartGyroscopeOptions): void;
    /**
     * 停止监听陀螺仪数据
     *
     * 参考: [http://uniapp.dcloud.io/api/system/gyroscope?id=stopgyroscope](http://uniapp.dcloud.io/api/system/gyroscope?id=stopgyroscope)
     */
    stopGyroscope(options?: StopGyroscopeOptions): void;
    /**
     * 动态加载网络字体
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/font?id=loadfontface](http://uniapp.dcloud.io/api/ui/font?id=loadfontface)
     */
    loadFontFace(options?: LoadFontFaceOptions): void;
    /**
     * 获取小程序下该菜单按钮的布局位置信息
     *
     * 参考: [http://uniapp.dcloud.io/api/ui/menuButton?id=getmenubuttonboundingclientrect](http://uniapp.dcloud.io/api/ui/menuButton?id=getmenubuttonboundingclientrect)
     */
    getMenuButtonBoundingClientRect(): GetMenuButtonBoundingClientRectRes;
}

interface GeneralCallbackResult {
    /**
     * 错误信息
     */
    errMsg?: string | undefined;
}

interface SubNVue {
    /**
     * 显示原生子窗体
     */
    show(
        options?:
            | "slide-in-right"
            | "slide-in-left"
            | "slide-in-top"
            | "slide-in-bottom"
            | "fade-in"
            | "zoom-out"
            | "zoom-fade-out"
            | "pop-in",
    ): void;
    /**
     * 隐藏原生子窗体
     */
    hide(
        options?:
            | "slide-out-right"
            | "slide-out-left"
            | "slide-out-top"
            | "slide-out-bottom"
            | "fade-out"
            | "zoom-in"
            | "zoom-fade-in"
            | "pop-out",
    ): void;
    /**
     * 设置原生子窗体的样式
     */
    setStyle(options?: SubNVuesSetStyleOptions): void;
    /**
     * 发送消息
     */
    postMessage(): void;
    /**
     * 监听消息
     */
    onMessage(success?: () => void): void;
}

interface SubNVuesSetStyleOptions {
    /**
     * 原生子窗体的排版位置
     * - static: 原生子窗体在页面中正常定位
     * - absolute: 原生子窗体在页面中绝对定位
     * - dock: 原生子窗体在页面中停靠
     */
    position?: "static" | "absolute" | "dock" | undefined;
    /**
     * 原生子窗体的停靠方式,仅当原生子窗体 "position" 属性值设置为 "dock" 时才生效
     * - top: 原生子窗体停靠则页面顶部
     * - bottom: 原生子窗体停靠在页面底部
     * - left: 原生子窗体停靠在页面左侧
     * - right: 原生子窗体停靠在页面右侧
     */
    dock?: "top" | "bottom" | "left" | "right" | undefined;
    /**
     * 原生子窗体的内置样式
     * - popup: 弹出层
     * - navigationBar: 导航栏
     */
    type?: "popup" | "navigationBar" | undefined;
    /**
     * 原生子窗体的遮罩层,仅当原生子窗体 "type" 属性值设置为 "popup" 时才生效
     * - popup: 弹出层
     * - navigationBar: 导航栏
     */
    mask?: "popup" | "navigationBar" | undefined;
    /**
     * 原生子窗体的宽度
     */
    width?: string | undefined;
    /**
     * 原生子窗体的高度
     */
    height?: string | undefined;
    /**
     * 原生子窗体垂直向下的偏移量
     */
    top?: string | undefined;
    /**
     * 原生子窗体垂直向上的偏移量
     */
    bottom?: string | undefined;
    /**
     * 原生子窗体水平向左的偏移量
     */
    left?: string | undefined;
    /**
     * 原生子窗体水平向右的偏移量
     */
    right?: string | undefined;
    /**
     * 原生子窗体的边距
     */
    margin?: string | undefined;
}

interface RequestPaymentOptions {
    /**
     * 支付服务提供商，通过 uni.getProvider 获取
     * - alipay: 支付宝支付
     * - wxpay: 微信支付
     * - baidu: 百度收银台
     * - appleiap: 苹果应用内支付
     */
    provider?: "alipay" | "wxpay" | "baidu" | "appleiap" | undefined;
    /**
     * 订单数据
     */
    orderInfo?: string | undefined;
    /**
     * 时间戳从1970年1月1日至今的秒数，即当前的时间，微信小程序独有
     */
    timeStamp?: string | undefined;
    /**
     * 随机字符串，长度为32个字符以下，微信小程序独有 。
     */
    nonceStr?: string | undefined;
    /**
     * 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=xx，微信小程序独有
     */
    package?: string | undefined;
    /**
     * 签名算法，暂支持 MD5 ，微信小程序独有
     */
    signType?: string | undefined;
    /**
     * 签名，具体签名方案参见小程序支付接口文档，微信小程序独有
     */
    paySign?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface RequestOptions {
    /**
     * 资源url
     */
    url?: string | undefined;
    /**
     * 请求的参数
     */
    data?: string | object | ArrayBuffer | undefined;
    /**
     * 设置请求的 header，header 中不能设置 Referer。
     */
    header?: any;
    /**
     * 默认为 GET
     * 可以是：OPTIONS，GET，HEAD，POST，PUT，DELETE，TRACE，CONNECT
     */
    method?: "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | undefined;
    /**
     * 如果设为json，会尝试对返回的数据做一次 JSON.parse
     */
    dataType?: string | undefined;
    /**
     * 设置响应的数据类型。合法值：text、arraybuffer
     */
    responseType?: string | undefined;
    /**
     * 成功返回的回调函数
     */
    success?: ((result: RequestSuccessCallbackResult) => void) | undefined;
    /**
     * 失败的回调函数
     */
    fail?: ((result: GeneralCallbackResult) => void) | undefined;
    /**
     * 结束的回调函数（调用成功、失败都会执行）
     */
    complete?: ((result: GeneralCallbackResult) => void) | undefined;
}

interface RequestSuccessCallbackResult {
    /**
     * 开发者服务器返回的数据
     */
    data?: string | undefined;
    /**
     * 开发者服务器返回的 HTTP 状态码
     */
    statusCode?: number | undefined;
    /**
     * 开发者服务器返回的 HTTP Response Header
     */
    header?: any;
}

interface RequestTask {
    /**
     * 中断请求任务
     */
    abort(): void;
}

interface UploadFileOption {
    /**
     * 开发者服务器 url
     */
    url?: string | undefined;
    /**
     * 文件类型，image/video/audio，仅支付宝小程序，且必填。
     * - image: 图像
     * - video: 视频
     * - audio: 音频
     */
    fileType?: "image" | "video" | "audio" | undefined;
    /**
     * 要上传文件资源的路径
     */
    filePath?: string | undefined;
    /**
     * 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
     */
    name?: string | undefined;
    /**
     * 需要上传的文件列表。使用 files 时，filePath 和 name 不生效。仅 5+App 支持
     */
    files?: UploadFileOptionFiles[] | undefined;
    /**
     * HTTP 请求 Header, header 中不能设置 Referer
     */
    header?: any;
    /**
     * HTTP 请求中其他额外的 form data
     */
    formData?: any;
    /**
     * 成功返回的回调函数
     */
    success?: ((result: UploadFileSuccessCallbackResult) => void) | undefined;
    /**
     * 失败的回调函数
     */
    fail?: ((result: GeneralCallbackResult) => void) | undefined;
    /**
     * 结束的回调函数（调用成功、失败都会执行）
     */
    complete?: ((result: GeneralCallbackResult) => void) | undefined;
}

interface UploadFileOptionFiles {
    /**
     * multipart 提交时，表单的项目名，默认为 file，如果 name 不填或填的值相同，可能导致服务端读取文件时只能读取到一个文件。
     */
    name?: string | undefined;
    /**
     * 要上传文件资源的路径
     */
    uri?: string | undefined;
}

interface UploadTask {
    /**
     * 监听上传进度变化
     */
    onProgressUpdate(callback?: (result: OnProgressUpdateResult) => void): void;
    /**
     * 中断上传任务
     */
    abort(): void;
}

interface OnProgressUpdateResult {
    /**
     * 上传进度百分比
     */
    progress?: number | undefined;
    /**
     * 已经上传的数据长度，单位 Bytes
     */
    totalBytesSent?: number | undefined;
    /**
     * 预期需要上传的数据总长度，单位 Bytes
     */
    totalBytesExpectedToSend?: number | undefined;
}

interface DownloadFileOption {
    /**
     * 下载资源的 url
     */
    url?: string | undefined;
    /**
     * HTTP 请求 Header，header 中不能设置 Referer
     */
    header?: any;
    /**
     * 下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'}
     */
    success?: ((result: DownloadSuccessData) => void) | undefined;
    /**
     * 失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface DownloadTask {
    /**
     * 监听下载进度变化
     */
    onProgressUpdate(callback?: (result: OnProgressDownloadResult) => void): void;
    /**
     * 中断下载任务
     */
    abort(): void;
}

interface OnProgressDownloadResult {
    /**
     * 下载进度百分比
     */
    progress?: number | undefined;
    /**
     * 已经下载的数据长度，单位 Bytes
     */
    totalBytesWritten?: number | undefined;
    /**
     * 预期需要下载的数据总长度，单位 Bytes
     */
    totalBytesExpectedToWrite?: number | undefined;
}

interface UploadFileSuccessCallbackResult {
    /**
     * 开发者服务器返回的数据
     */
    data?: string | undefined;
    /**
     * 开发者服务器返回的 HTTP 状态码
     */
    statusCode?: number | undefined;
}

interface DownloadSuccessData {
    /**
     * 临时文件路径，下载后的文件会存储到一个临时文件
     */
    tempFilePath?: string | undefined;
    /**
     * 开发者服务器返回的 HTTP 状态码
     */
    statusCode?: number | undefined;
}

interface ConnectSocketOption {
    /**
     * 开发者服务器接口地址，必须是 wss 协议，且域名必须是后台配置的合法域名
     */
    url?: string | undefined;
    /**
     * HTTP 请求 Header，header 中不能设置 Referer
     */
    header?: any;
    /**
     * 默认为 GET
     * 可以是：OPTIONS，GET，HEAD，POST，PUT，DELETE，TRACE，CONNECT
     */
    method?: "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | undefined;
    /**
     * 子协议数组
     */
    protocols?: string[] | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface SendSocketMessageOptions {
    /**
     * 需要发送的内容
     */
    data?: string | ArrayBuffer | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: GeneralCallbackResult) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: ((result: GeneralCallbackResult) => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: ((result: GeneralCallbackResult) => void) | undefined;
}

interface CloseSocketOptions {
    /**
     * 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。如果这个参数没有被指定，默认的取值是1000 （表示正常连接关闭）
     */
    code?: number | undefined;
    /**
     * 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于123字节的UTF-8 文本（不是字符）
     */
    reason?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: GeneralCallbackResult) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: ((result: GeneralCallbackResult) => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: ((result: GeneralCallbackResult) => void) | undefined;
}

interface SocketTask {
    /**
     * 通过 WebSocket 连接发送数据
     */
    send(options?: SendSocketMessageOptions): void;
    /**
     * 关闭 WebSocket 连接
     */
    close(options?: CloseSocketOptions): void;
    /**
     * 监听 WebSocket 连接打开事件
     */
    onOpen(callback?: (result: OnSocketOpenCallbackResult) => void): void;
    /**
     * 监听 WebSocket 连接关闭事件
     */
    onClose(callback?: () => void): void;
    /**
     * 监听 WebSocket 错误
     */
    onError(callback?: (result: GeneralCallbackResult) => void): void;
    /**
     * 监听WebSocket接受到服务器的消息事件
     */
    onMessage(callback?: (result: OnSocketMessageCallbackResult) => void): void;
}

interface OnSocketMessageCallbackResult {
    /**
     * 服务器返回的消息
     */
    data?: string | ArrayBuffer | undefined;
}

interface OnSocketOpenCallbackResult {
    /**
     * 连接成功的 HTTP 响应 Header
     */
    header?: any;
}

interface ChooseImageOptions {
    /**
     * 最多可以选择的图片张数，默认9
     */
    count?: number | undefined;
    /**
     * original 原图，compressed 压缩图，默认二者都有
     */
    sizeType?: string | string[] | undefined;
    /**
     * album 从相册选图，camera 使用相机，默认二者都有
     */
    sourceType?: string | string[] | undefined;
    /**
     * 成功则返回图片的本地文件路径列表 tempFilePaths
     */
    success?: ((result: ChooseImageSuccessCallbackResult) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface ChooseImageSuccessCallbackResult {
    /**
     * 图片的本地文件路径列表
     */
    tempFilePaths?: string | any[] | undefined;
    /**
     * 图片的本地文件列表，每一项是一个 File 对象
     */
    tempFiles?: ChooseImageSuccessCallbackResultFile | ChooseImageSuccessCallbackResultFile[] | undefined;
}

interface ChooseImageSuccessCallbackResultFile {
    /**
     * 本地文件路径
     */
    path?: string | undefined;
    /**
     * 本地文件大小，单位：B
     */
    size?: number | undefined;
}

interface PreviewImageOptions {
    /**
     * 当前显示图片的链接，不填则默认为 urls 的第一张
     */
    count?: string | undefined;
    /**
     * current 为当前显示图片的链接/索引值，不填或填写的值无效则为 urls 的第一张。App平台在 1.9.5至1.9.8之间，current为必填。不填会报错
     */
    current?: string | undefined;
    /**
     * 需要预览的图片链接列表
     */
    urls?: string | any[] | undefined;
    /**
     * 图片指示器样式
     * - default: 底部圆点指示器
     * - number: 顶部数字指示器
     * - none: 不显示指示器
     */
    indicator?: "default" | "number" | "none" | undefined;
    /**
     * 是否可循环预览
     */
    loop?: boolean | undefined;
    /**
     * 长按图片显示操作菜单，如不填默认为保存相册，1.9.5 起支持。
     */
    longPressActions?: LongPressActionsOptions | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface LongPressActionsOptions {
    /**
     * 按钮的文字数组
     */
    itemList?: string[] | undefined;
    /**
     * 按钮的文字颜色，字符串格式，默认为"#000000"
     */
    itemColor?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: LongPressActionsSuccessData) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface LongPressActionsSuccessData {
    /**
     * 接口调用失败的回调函数
     */
    tapIndex?: number | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    index?: number | undefined;
}

interface GetImageInfoOptions {
    /**
     * 图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径
     */
    src?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: GetImageInfoSuccessData) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetImageInfoSuccessData {
    /**
     * 图片宽度，单位px
     */
    width?: number | undefined;
    /**
     * 图片高度，单位px
     */
    height?: number | undefined;
    /**
     * 返回图片的本地路径
     */
    path?: string | undefined;
    /**
     * 返回图片的方向
     */
    orientation?: string | undefined;
    /**
     * 返回图片的格式
     */
    type?: string | undefined;
}

interface SaveImageToPhotosAlbumOptions {
    /**
     * 图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径
     */
    filePath?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface CompressImageOptions {
    /**
     * 图片路径，图片的路径，可以是相对路径、临时文件路径、存储文件路径
     */
    src?: string | undefined;
    /**
     * 压缩质量，范围0～100，数值越小，质量越低，压缩率越高（仅对jpg有效）
     */
    quality?: number | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: ((result: CompressImageSuccessData) => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface CompressImageSuccessData {
    /**
     * 压缩后图片的临时文件路径
     */
    tempFilePath?: string | undefined;
}

interface StartRecordOptions {
    /**
     * 录音成功后调用，返回录音文件的临时文件路径，res = {tempFilePath: '录音文件的临时路径'}
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface RecorderManager {
    /**
     * 开始录音
     */
    start(options?: RecorderManagerStartOptions): void;
    /**
     * 暂停录音
     */
    pause(): void;
    /**
     * 暂停录音
     */
    resume(): void;
    /**
     * 停止录音
     */
    stop(): void;
    /**
     * 录音开始事件
     */
    onStart(options?: () => void): void;
    /**
     * 录音暂停事件
     */
    onPause(options?: () => void): void;
    /**
     * 录音停止事件，会回调文件地址
     */
    onStop(options?: () => void): void;
    /**
     * 已录制完指定帧大小的文件，会回调录音分片结果数据。如果设置了 frameSize ，则会回调此事件
     */
    onFrameRecorded(options?: () => void): void;
    /**
     * 录音错误事件, 会回调错误信息
     */
    onError(options?: () => void): void;
}

interface RecorderManagerStartOptions {
    /**
     * 指定录音的时长，单位 ms ，如果传入了合法的 duration ，在到达指定的 duration 后会自动停止录音，最大值 600000（10 分钟）,默认值 60000（1 分钟）
     */
    duration?: number | undefined;
    /**
     * 采样率，有效值 8000/16000/44100
     */
    sampleRate?: number | undefined;
    /**
     * 录音通道数，有效值 1/2
     */
    numberOfChannels?: number | undefined;
    /**
     * 编码码率，有效值见下表格
     */
    encodeBitRate?: number | undefined;
    /**
     * 音频格式，有效值 aac/mp3
     */
    format?: string | undefined;
    /**
     * 指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3 格式。
     */
    frameSize?: number | undefined;
}

interface PlayVoiceOptions {
    /**
     * 需要播放的语音文件的文件路径
     */
    filePath?: string | undefined;
    /**
     * original 原图，compressed 压缩图，默认二者都有
     */
    duration?: number | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetBackgroundAudioPlayerStateOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: GetBackgroundAudioPlayerStateSuccessData) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetBackgroundAudioPlayerStateSuccessData {
    /**
     * 选定音频的长度（单位：s），只有在当前有音乐播放时返回
     */
    duration?: number | undefined;
    /**
     * 选定音频的播放位置（单位：s），只有在当前有音乐播放时返回
     */
    currentPosition?: number | undefined;
    /**
     * 播放状态（2：没有音乐在播放，1：播放中，0：暂停中）
     */
    status?: number | undefined;
    /**
     * 音频的下载进度（整数，80 代表 80%），只有在当前有音乐播放时返回
     */
    downloadPercent?: number | undefined;
    /**
     * 歌曲数据链接，只有在当前有音乐播放时返回
     */
    dataUrl?: string | undefined;
}

interface GetBackgroundAudioOptions {
    /**
     * 音乐链接，目前支持的格式有 m4a, aac, mp3, wav
     */
    dataUrl?: string | undefined;
    /**
     * 音乐标题
     */
    title?: string | undefined;
    /**
     * 封面url
     */
    coverImgUrl?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface SeekBackgroundAudioOptions {
    /**
     * 音乐位置，单位：秒
     */
    position?: number | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface BackgroundAudioManager {
    /**
     * 当前音频的长度（单位：s），只有在当前有合法的 src 时返回
     */
    duration?: number | undefined;
    /**
     * 当前音频的播放位置（单位：s），只有在当前有合法的 src 时返回
     */
    currentTime?: number | undefined;
    /**
     * 当前是是否暂停或停止状态，true 表示暂停或停止，false 表示正在播放
     */
    paused?: boolean | undefined;
    /**
     * 音频的数据源，默认为空字符串，当设置了新的 src 时，会自动开始播放 ，目前支持的格式有 m4a, aac, mp3, wav
     */
    src?: string | undefined;
    /**
     * 音频开始播放的位置（单位：s）
     */
    startTime?: number | undefined;
    /**
     * 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲
     */
    buffered?: number | undefined;
    /**
     * 音频标题，用于做原生音频播放器音频标题。原生音频播放器中的分享功能，分享出去的卡片标题，也将使用该值。
     */
    title?: string | undefined;
    /**
     * 专辑名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值
     */
    epname?: string | undefined;
    /**
     * 歌手名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值
     */
    singer?: string | undefined;
    /**
     * 封面图url，用于做原生音频播放器背景图。原生音频播放器中的分享功能，分享出去的卡片配图及背景也将使用该图。
     */
    coverImgUrl?: string | undefined;
    /**
     * 页面链接，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值
     */
    webUrl?: string | undefined;
    /**
     * 音频协议。默认值为 'http'，设置 'hls' 可以支持播放 HLS 协议的直播音频
     */
    protocol?: string | undefined;
    /**
     * 播放
     */
    play(): void;
    /**
     * 暂停
     */
    pause(): void;
    /**
     * 跳转到指定位置，单位 s
     */
    seek(): void;
    /**
     * 停止
     */
    stop(): void;
    /**
     * 背景音频进入可以播放状态，但不保证后面可以流畅播放
     */
    onCanplay(callback?: () => void): void;
    /**
     * 背景音频播放事件
     */
    onPlay(callback?: () => void): void;
    /**
     * 背景音频暂停事件
     */
    onPause(callback?: () => void): void;
    /**
     * 背景音频停止事件
     */
    onStop(callback?: () => void): void;
    /**
     * 背景音频自然播放结束事件
     */
    onEnded(callback?: () => void): void;
    /**
     * 背景音频播放进度更新事件
     */
    onTimeUpdate(callback?: () => void): void;
    /**
     * 用户在系统音乐播放面板点击上一曲事件（iOS only）
     */
    onPrev(callback?: () => void): void;
    /**
     * 用户在系统音乐播放面板点击下一曲事件（iOS only）
     */
    onNext(callback?: () => void): void;
    /**
     * 背景音频播放错误事件
     */
    onNext(callback?: () => void): void;
    /**
     * 音频加载中事件，当音频因为数据不足，需要停下来加载时会触发
     */
    onWaiting(callback?: () => void): void;
}

interface CreateAudioContext {
    /**
     * 音频的地址
     */
    setSrc(): void;
    /**
     * 暂停
     */
    pause(): void;
    /**
     * 播放
     */
    play(): void;
    /**
     * 跳转到指定位置，单位 s
     */
    seek(): void;
}

interface CreateInnerAudioContext {
    /**
     * 当前音频的长度（单位：s），只有在当前有合法的 src 时返回
     */
    duration?: number | undefined;
    /**
     * 当前音频的播放位置（单位：s），只有在当前有合法的 src 时返回
     */
    currentTime?: number | undefined;
    /**
     * 当前是是否暂停或停止状态，true 表示暂停或停止，false 表示正在播放
     */
    paused?: boolean | undefined;
    /**
     * 音频的数据链接，用于直接播放。
     */
    src?: string | undefined;
    /**
     * 音频开始播放的位置（单位：s）
     */
    startTime?: number | undefined;
    /**
     * 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲
     */
    buffered?: number | undefined;
    /**
     * 是否自动开始播放，默认 false
     */
    autoplay?: boolean | undefined;
    /**
     * 是否循环播放，默认 false
     */
    loop?: boolean | undefined;
    /**
     * 是否遵循系统静音开关，当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音，默认值 true
     */
    obeyMuteSwitch?: boolean | undefined;
    /**
     * 音量。范围 0~1。
     */
    volume?: number | undefined;
    /**
     * 暂停
     */
    pause(): void;
    /**
     * 停止
     */
    stop(): void;
    /**
     * 播放
     */
    play(): void;
    /**
     * 跳转到指定位置，单位 s
     */
    seek(): void;
    /**
     * 销毁当前实例
     */
    destroy(): void;
    /**
     * 音频进入可以播放状态，但不保证后面可以流畅播放
     */
    onCanplay(callback?: () => void): void;
    /**
     * 音频播放事件
     */
    onPlay(callback?: () => void): void;
    /**
     * 音频暂停事件
     */
    onPause(callback?: () => void): void;
    /**
     * 音频停止事件
     */
    onStop(callback?: () => void): void;
    /**
     * 音频自然播放结束事件
     */
    onEnded(callback?: () => void): void;
    /**
     * 音频播放进度更新事件
     */
    onTimeUpdate(callback?: () => void): void;
    /**
     * 音频播放错误事件
     */
    onError(callback?: () => void): void;
    /**
     * 音频加载中事件，当音频因为数据不足，需要停下来加载时会触发
     */
    onWaiting(callback?: () => void): void;
    /**
     * 音频进行 seek 操作事件
     */
    onSeeking(callback?: () => void): void;
    /**
     * 音频完成 seek 操作事件
     */
    onSeeked(callback?: () => void): void;
    /**
     * 取消监听 onCanplay 事件
     */
    offCanplay(callback?: () => void): void;
    /**
     * 取消监听 onPlay 事件
     */
    offPlay(callback?: () => void): void;
    /**
     * 取消监听 onPause 事件
     */
    offPause(callback?: () => void): void;
    /**
     * 取消监听 onStop 事件
     */
    offStop(callback?: () => void): void;
    /**
     * 取消监听 onEnded 事件
     */
    offEnded(callback?: () => void): void;
    /**
     * 取消监听 onTimeUpdate 事件
     */
    offTimeUpdate(callback?: () => void): void;
    /**
     * 取消监听 onWaiting 事件
     */
    offError(callback?: () => void): void;
    /**
     * 取消监听 onWaiting 事件
     */
    offWaiting(callback?: () => void): void;
    /**
     * 取消监听 onSeeking 事件
     */
    offSeeking(callback?: () => void): void;
    /**
     * 取消监听 onSeeked 事件
     */
    offSeeked(callback?: () => void): void;
}

interface ChooseVideoOptions {
    /**
     * album 从相册选视频，camera 使用相机拍摄，默认为：['album', 'camera']
     */
    sourceType?: string | any[] | undefined;
    /**
     * 是否压缩所选的视频源文件，默认值为true，需要压缩
     */
    compressed?: boolean | undefined;
    /**
     * 拍摄视频最长拍摄时间，单位秒。最长支持 60 秒
     */
    maxDuration?: number | undefined;
    /**
     * 摄像切换
     * - front: 前置摄像头
     * - back: 后置摄像头
     */
    camera?: "front" | "back" | undefined;
    /**
     * 接口调用成功，返回视频文件的临时文件路径，详见返回参数说明
     */
    success?: ((result: ChooseVideoSuccess) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface SaveVideoToPhotosAlbumOptions {
    /**
     * 视频文件路径，可以是临时文件路径也可以是永久文件路径
     */
    filePath?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface ChooseVideoSuccess {
    /**
     * 临时文件路径，下载后的文件会存储到一个临时文件
     */
    tempFilePath?: string | undefined;
    /**
     * 选定视频的时间长度
     */
    duration?: number | undefined;
    /**
     * 选定视频的数据量大小
     */
    size?: number | undefined;
    /**
     * 返回选定视频的长
     */
    height?: number | undefined;
    /**
     * 返回选定视频的宽
     */
    width?: number | undefined;
}

interface VideoContext {
    /**
     * 暂停
     */
    pause(): void;
    /**
     * 播放
     */
    play(): void;
    /**
     * 跳转到指定位置，单位 s
     */
    seek(): void;
    /**
     * 发送弹幕，danmu 包含两个属性 text, color。
     */
    sendDanmu(): void;
    /**
     * 设置倍速播放，支持的倍率有 0.5/0.8/1.0/1.25/1.5
     */
    playbackRate(): void;
    /**
     * 进入全屏，可传入{direction}参数（1.7.0起支持），详见video组件文档
     */
    requestFullScreen(): void;
    /**
     * 退出全屏
     */
    exitFullScreen(): void;
}

interface CameraContext {
    /**
     * 拍照，可指定质量，成功则返回图片
     */
    takePhoto(options?: CameraContextTakePhotoOptions): void;
    /**
     * 开始录像
     */
    startRecord(options?: CameraContextStartRecordOptions): void;
    /**
     * 结束录像，成功则返回封面与视频
     */
    stopRecord(options?: CameraContextStopRecordOptions): void;
    /**
     * 结束录像，成功则返回封面与视频
     */
    onCameraFrame(callback?: (result: CameraFrame) => void): void;
}

interface CameraContextTakePhotoOptions {
    /**
     * 成像质量，值为high, normal, low，默认normal
     * - normal: 普通质量
     * - high: 高质量
     * - low: 低质量
     */
    quality?: "normal" | "high" | "low" | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: CameraContextTakePhotoResult) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface CameraContextTakePhotoResult {
    /**
     * 照片文件的临时路径，安卓是jpg图片格式，ios是png
     */
    tempImagePath?: string | undefined;
}

interface CameraContextStartRecordOptions {
    /**
     * 超过30s或页面onHide时会结束录像
     */
    timeoutCallback?: ((result: CameraContextStopRecordResult) => void) | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface CameraContextStopRecordOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: CameraContextStopRecordResult) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface CameraContextStopRecordResult {
    /**
     * 封面图片文件的临时路径
     */
    tempThumbPath?: string | undefined;
    /**
     * 视频的文件的临时路径
     */
    tempVideoPath?: string | undefined;
}

interface CameraFrame {
    /**
     * 图像数据矩形的宽度
     */
    width?: number | undefined;
    /**
     * 图像数据矩形的高度
     */
    height?: number | undefined;
    /**
     * 图像像素点数据，一维数组，每四项表示一个像素点的 rgba
     */
    data?: ArrayBuffer | undefined;
}

interface SaveFileOptions {
    /**
     * 需要保存的文件的临时路径
     */
    tempFilePath?: string | undefined;
    /**
     * 返回文件的保存路径，res = {savedFilePath: '文件的保存路径'}
     */
    success?: ((result: SaveFileSuccess) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface SaveFileSuccess {
    /**
     * 文件的保存路径
     */
    savedFilePath?: string | undefined;
}

interface GetFileInfoOptions {
    /**
     * 本地路径
     */
    filePath?: string | undefined;
    /**
     * 计算文件摘要的算法，默认值 md5，有效值：md5，sha1
     */
    digestAlgorithm?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: GetFileInfoSuccess) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetFileInfoSuccess {
    /**
     * 文件大小，单位：B
     */
    size?: number | undefined;
    /**
     * 按照传入的 digestAlgorithm 计算得出的的文件摘要
     */
    digest?: string | undefined;
    /**
     * 调用结果
     */
    errMsg?: string | undefined;
}

interface GetSavedFileListOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: GetSavedFileListSuccess) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetSavedFileListSuccess {
    /**
     * 接口调用结果
     */
    errMsg?: number | undefined;
    /**
     * 文件列表
     */
    fileList?: string | undefined;
}

interface GetSavedFileInfoOptions {
    /**
     * 文件路径
     */
    filePath?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: GetSavedFileInfoSuccess) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetSavedFileInfoSuccess {
    /**
     * 接口调用结果
     */
    errMsg?: string | undefined;
    /**
     * 文件大小，单位B
     */
    size?: number | undefined;
    /**
     * 文件保存时的时间戳，从1970/01/01 08:00:00 到该时刻的秒数
     */
    createTime?: number | undefined;
}

interface RemoveSavedFileOptions {
    /**
     * 文件路径
     */
    filePath?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface OpenDocumentOptions {
    /**
     * 文件路径
     */
    filePath?: string | undefined;
    /**
     * 文件类型，指定文件类型打开文件，有效值 doc, xls, ppt, pdf, docx, xlsx, pptx
     */
    fileType?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface SetStorageOptions {
    /**
     * 本地缓存中的指定的 key
     */
    key?: string | undefined;
    /**
     * 需要存储的内容，只支持原生类型、及能够通过 JSON.stringify 序列化的对象
     */
    data?: any;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetStorageOptions {
    /**
     * 本地缓存中的指定的 key
     */
    key?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: any) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetStorageInfoOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: GetStorageInfoSuccess) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetStorageInfoSuccess {
    /**
     * 当前storage中所有的 key
     */
    keys?: string[] | undefined;
    /**
     * 当前占用的空间大小, 单位 kb
     */
    currentSize?: number | undefined;
    /**
     * 限制的空间大小，单位kb
     */
    limitSize?: number | undefined;
}

interface RemoveStorageOptions {
    /**
     * 本地缓存中的指定的 key
     */
    key?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetLocationOptions {
    /**
     * 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于uni.openLocation的坐标
     */
    type?: string | undefined;
    /**
     * 传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度
     */
    altitude?: boolean | undefined;
    /**
     * 传入 true 会解析地址
     */
    geocode?: boolean | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: GetLocationSuccess) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetLocationSuccess {
    /**
     * 纬度，浮点数，范围为-90~90，负数表示南纬
     */
    latitude?: number | undefined;
    /**
     * 经度，范围为-180~180，负数表示西经
     */
    longitude?: number | undefined;
    /**
     * 速度，浮点数，单位m/s
     */
    speed?: number | undefined;
    /**
     * 位置的精确度
     */
    accuracy?: string | undefined;
    /**
     * 高度，单位 m
     */
    altitude?: number | undefined;
    /**
     * 垂直精度，单位 m（Android 无法获取，返回 0）
     */
    verticalAccuracy?: number | undefined;
    /**
     * 水平精度，单位 m
     */
    horizontalAccuracy?: number | undefined;
    /**
     * 地址信息
     */
    address?: any;
}

interface ChooseLocationOptions {
    /**
     * 搜索关键字
     */
    keyword?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: ChooseLocationSuccess) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface ChooseLocationSuccess {
    /**
     * 位置名称
     */
    name?: string | undefined;
    /**
     * 详细地址
     */
    address?: string | undefined;
    /**
     * 纬度，浮点数，范围为-90~90，负数表示南纬
     */
    latitude?: number | undefined;
    /**
     * 经度，范围为-180~180，负数表示西经
     */
    longitude?: number | undefined;
}

interface OpenLocationOptions {
    /**
     * 纬度，范围为-90~90，负数表示南纬
     */
    latitude?: number | undefined;
    /**
     * 经度，范围为-180~180，负数表示西经
     */
    longitude?: number | undefined;
    /**
     * 缩放比例，范围5~18，默认为18
     */
    scale?: number | undefined;
    /**
     * 位置名称
     */
    name?: string | undefined;
    /**
     * 地址的详细说明
     */
    address?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface MapContext {
    /**
     * 获取当前地图中心的经纬度，返回的是 gcj02 坐标系，可以用于 uni.openLocation
     */
    getCenterLocation(options?: MapContextGetCenterLocationOptions): void;
    /**
     * 将地图中心移动到当前定位点，需要配合map组件的show-location使用
     */
    moveToLocation(): void;
    /**
     * 平移marker，带动画
     */
    translateMarker(options?: MapContextTranslateMarkerOptions): void;
    /**
     * 缩放视野展示所有经纬度
     */
    includePoints(options?: MapContextIncludePointsOptions): void;
    /**
     * 获取当前地图的视野范围
     */
    getRegion(options?: MapContextGetRegionOptions): void;
    /**
     * 获取当前地图的缩放级别
     */
    getScale(options?: MapContextGetScaleOptions): void;
    /**
     * 获取原生地图对象 plus.maps.Map
     */
    $getAppMap(): any;
}

interface MapContextGetCenterLocationOptions {
    /**
     * 接口调用成功的回调函数 ，res = { longitude: "经度", latitude: "纬度"}
     */
    success?: ((result: LocationObject) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface LocationObject {
    /**
     * 纬度，浮点数，范围为-90~90，负数表示南纬
     */
    latitude?: number | undefined;
    /**
     * 经度，范围为-180~180，负数表示西经
     */
    longitude?: number | undefined;
}

interface MapContextTranslateMarkerOptions {
    /**
     * 指定marker
     */
    markerId?: number | undefined;
    /**
     * 指定marker移动到的目标点
     */
    destination?: LocationObject | undefined;
    /**
     * 移动过程中是否自动旋转marker
     */
    autoRotate?: boolean | undefined;
    /**
     * marker的旋转角度
     */
    rotate?: number | undefined;
    /**
     * 动画持续时长，默认值1000ms，平移与旋转分别计算
     */
    duration?: number | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 动画结束回调函数
     */
    animationEnd?: (() => void) | undefined;
}

interface MapContextIncludePointsOptions {
    /**
     * 要显示在可视区域内的坐标点列表，[{latitude, longitude}]
     */
    points?: LocationObject[] | undefined;
    /**
     * 坐标点形成的矩形边缘到地图边缘的距离，单位像素。格式为[上,右,下,左]，安卓上只能识别数组第一项，上下左右的padding一致。开发者工具暂不支持padding参数。
     */
    padding?: number[] | undefined;
}

interface MapContextGetRegionOptions {
    /**
     * 接口调用成功的回调函数，res = {southwest, northeast}，西南角与东北角的经纬度
     */
    success?: ((result: MapContextGetRegionResult) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface MapContextGetRegionResult {
    /**
     * 西南角的经纬度
     */
    southwest?: LocationObject | undefined;
    /**
     * 东北角的经纬度
     */
    northeast?: LocationObject | undefined;
}

interface MapContextGetScaleOptions {
    /**
     * 接口调用成功的回调函数，res = {scale}
     */
    success?: ((result: MapContextGetScaleResult) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface MapContextGetScaleResult {
    /**
     * 地图缩放级别
     */
    scale?: number | undefined;
}

interface GetSystemInfoOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: GetSystemInfoResult) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetSystemInfoResult {
    /**
     * 手机品牌
     */
    brand?: string | undefined;
    /**
     * 手机型号
     */
    model?: string | undefined;
    /**
     * 设备像素比
     */
    pixelRatio?: number | undefined;
    /**
     * 屏幕宽度
     */
    screenWidth?: number | undefined;
    /**
     * 屏幕高度
     */
    screenHeight?: number | undefined;
    /**
     * 可使用窗口宽度
     */
    windowWidth?: number | undefined;
    /**
     * 可使用窗口高度
     */
    windowHeight?: number | undefined;
    /**
     * 状态栏的高度
     */
    statusBarHeight?: number | undefined;
    /**
     * 导航栏的高度
     */
    navigationBarHeight?: number | undefined;
    /**
     * 标题栏高度
     */
    titleBarHeight?: number | undefined;
    /**
     * 程序设置的语言
     */
    language?: string | undefined;
    /**
     * 引擎版本号
     */
    version?: number | undefined;
    /**
     * 设备磁盘容量
     */
    storage?: string | undefined;
    /**
     * 当前电量百分比
     */
    currentBattery?: string | undefined;
    /**
     * 宿主APP名称
     */
    appName?: string | undefined;
    /**
     * App平台
     */
    AppPlatform?: string | undefined;
    /**
     * 宿主平台
     */
    host?: string | undefined;
    /**
     * 当前运行的客户端
     */
    app?: string | undefined;
    /**
     * 客户端基础库版本
     */
    SDKVersion?: string | undefined;
    /**
     * 宿主平台版本号
     */
    swanNativeVersion?: string | undefined;
    /**
     * 操作系统版本
     */
    system?: string | undefined;
    /**
     * 客户端平台
     */
    platform?: string | undefined;
    /**
     * 用户字体大小设置
     */
    fontSizeSetting?: number | undefined;
    /**
     * 可使用窗口的顶部位置
     */
    windowTop?: number | undefined;
    /**
     * 可使用窗口的底部位置
     */
    windowBottom?: number | undefined;
    /**
     * 允许微信使用相册的开关（仅 iOS 有效）
     */
    albumAuthorized?: boolean | undefined;
    /**
     * 允许微信使用摄像头的开关
     */
    cameraAuthorized?: boolean | undefined;
    /**
     * 允许微信使用定位的开关
     */
    locationAuthorized?: boolean | undefined;
    /**
     * 允许微信使用麦克风的开关
     */
    microphoneAuthorized?: boolean | undefined;
    /**
     * 允许微信通知的开关
     */
    notificationAuthorized?: boolean | undefined;
    /**
     * 允许微信通知带有提醒的开关（仅 iOS 有效）
     */
    notificationAlertAuthorized?: boolean | undefined;
    /**
     * 允许微信通知带有标记的开关（仅 iOS 有效）
     */
    notificationBadgeAuthorized?: boolean | undefined;
    /**
     * 允许微信通知带有声音的开关（仅 iOS 有效）
     */
    notificationSoundAuthorized?: boolean | undefined;
    /**
     * 蓝牙的系统开关
     */
    bluetoothEnabled?: boolean | undefined;
    /**
     * 地理位置的系统开关
     */
    locationEnabled?: boolean | undefined;
    /**
     * Wi-Fi 的系统开关
     */
    wifiEnabled?: boolean | undefined;
    /**
     * 在竖屏正方向下的安全区域
     */
    safeArea?: SafeAreaResult | undefined;
    /**
     * 上一次缓存的位置信息
     */
    cacheLocation?: any;
}

interface SafeAreaResult {
    /**
     * 安全区域左上角横坐标
     */
    left?: number | undefined;
    /**
     * 安全区域右下角横坐标
     */
    right?: number | undefined;
    /**
     * 安全区域左上角纵坐标
     */
    top?: number | undefined;
    /**
     * 安全区域右下角纵坐标
     */
    bottom?: number | undefined;
    /**
     * 安全区域的宽度，单位逻辑像素
     */
    width?: number | undefined;
    /**
     * 安全区域的高度，单位逻辑像素
     */
    height?: number | undefined;
}

interface GetNetworkTypeOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: GetNetworkTypeSuccess) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetNetworkTypeSuccess {
    /**
     * 网络类型
     */
    networkType?: string | undefined;
}

interface OnNetworkStatusChangeSuccess {
    /**
     * 当前是否有网络连接
     */
    isConnected?: number | undefined;
    /**
     * 网络类型
     */
    networkType?: string | undefined;
}

interface OnKeyboardHeightChangeResult {
    /**
     * 键盘高度
     */
    height?: number | undefined;
}

interface OnAccelerometerChangeSuccess {
    /**
     * X 轴
     */
    x?: number | undefined;
    /**
     * Y 轴
     */
    y?: number | undefined;
    /**
     * Z 轴
     */
    z?: number | undefined;
}

interface StartAccelerometerOptions {
    /**
     * 成功返回的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface StopAccelerometerOptions {
    /**
     * 成功返回的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface OnCompassChangeSuccess {
    /**
     * 面对的方向度数
     */
    direction?: number | undefined;
}

interface StartCompassOptions {
    /**
     * 成功返回的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface StopCompassOptions {
    /**
     * 成功返回的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface MakePhoneCallOptions {
    /**
     * 需要拨打的电话号码
     */
    phoneNumber?: string | undefined;
    /**
     * 成功返回的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface ScanCodeOptions {
    /**
     * 是否只能从相机扫码，不允许从相册选择图片
     */
    onlyFromCamera?: boolean | undefined;
    /**
     * 扫码类型，参数类型是数组，二维码是'qrCode'，一维码是'barCode'，DataMatrix是‘datamatrix’，pdf417是‘pdf417’。
     */
    scanType?: any[] | undefined;
    /**
     * 成功返回的回调函数
     */
    success?: ((result: ScanCodeSuccessRes) => void) | undefined;
    /**
     * 失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface ScanCodeSuccessRes {
    /**
     * 所扫码的内容
     */
    result?: string | undefined;
    /**
     * 所扫码的类型
     */
    scanType?: string | undefined;
    /**
     * 所扫码的字符集
     */
    charSet?: string | undefined;
    /**
     * 当所扫的码为当前应用的合法二维码时，会返回此字段，内容为二维码携带的 path。
     */
    path?: string | undefined;
}

interface SetClipboardDataOptions {
    /**
     * 需要设置的内容
     */
    data?: string | undefined;
    /**
     * 成功返回的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetClipboardDataOptions {
    /**
     * 成功返回的回调函数
     */
    success?: ((result: GetClipboardDataSuccessRes) => void) | undefined;
    /**
     * 失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetClipboardDataSuccessRes {
    /**
     * 剪贴板的内容
     */
    data?: string | undefined;
}

interface OpenBluetoothAdapterOptions {
    /**
     * 成功则返回成功初始化信息
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface CloseBluetoothAdapterOptions {
    /**
     * 成功则返回成功关闭模块信息
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetBluetoothAdapterStateOptions {
    /**
     * 成功则返回本机蓝牙适配器状态
     */
    success?: ((result: GetBluetoothAdapterStateSuccess) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetBluetoothAdapterStateSuccess {
    /**
     * 是否正在搜索设备
     */
    discovering?: boolean | undefined;
    /**
     * 蓝牙适配器是否可用
     */
    available?: boolean | undefined;
    /**
     * 成功：ok，错误：详细信息
     */
    errMsg?: string | undefined;
}

interface OnBluetoothAdapterStateChangeResult {
    /**
     * 是否正在搜索设备
     */
    discovering?: boolean | undefined;
    /**
     * 蓝牙适配器是否可用
     */
    available?: boolean | undefined;
}

interface OnBluetoothDeviceFoundResult {
    /**
     * 设备列表信息
     */
    devices?: BluetoothDeviceInfo[] | undefined;
}

interface StartBluetoothDevicesDiscoveryOptions {
    /**
     * 蓝牙设备主 service 的 uuid 列表
     */
    services?: any[] | undefined;
    /**
     * 是否允许重复上报同一设备， 如果允许重复上报，则onDeviceFound 方法会多次上报同一设备，但是 RSSI 值会有不同
     */
    allowDuplicatesKey?: boolean | undefined;
    /**
     * 上报设备的间隔，默认为0，意思是找到新设备立即上报，否则根据传入的间隔上报
     */
    interval?: number | undefined;
    /**
     * 成功则返回本机蓝牙适配器状态
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface StopBluetoothDevicesDiscoveryOptions {
    /**
     * 成功则返回本机蓝牙适配器状态
     */
    success?: ((result: StopBluetoothDevicesDiscoverySuccess) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface StopBluetoothDevicesDiscoverySuccess {
    /**
     * 成功：ok，错误：详细信息
     */
    errMsg?: string | undefined;
}

interface GetBluetoothDevicesOptions {
    /**
     * 成功则返回本机蓝牙适配器状态
     */
    success?: ((result: GetBluetoothDevicesSuccess) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetBluetoothDevicesSuccess {
    /**
     * uuid 对应的的已连接设备列表
     */
    devices?: BluetoothDeviceInfo[] | undefined;
    /**
     * 成功：ok，错误：详细信息
     */
    errMsg?: string | undefined;
}

interface BluetoothDeviceInfo {
    /**
     * 蓝牙设备名称，某些设备可能没有
     */
    name?: string | undefined;
    /**
     * 用于区分设备的 id
     */
    deviceId?: string | undefined;
    /**
     * 当前蓝牙设备的信号强度
     */
    RSSI?: number | undefined;
    /**
     * 当前蓝牙设备的广播数据段中的ManufacturerData数据段 （注意：vConsole 无法打印出 ArrayBuffer 类型数据）
     */
    advertisData?: any[] | undefined;
    /**
     * 当前蓝牙设备的广播数据段中的ServiceUUIDs数据段
     */
    advertisServiceUUIDs?: any[] | undefined;
    /**
     * 当前蓝牙设备的广播数据段中的LocalName数据段
     */
    localName?: string | undefined;
    /**
     * 当前蓝牙设备的广播数据段中的ServiceData数据段
     */
    serviceData?: any[] | undefined;
}

interface GetConnectedBluetoothDevicesOptions {
    /**
     * 蓝牙设备主 service 的 uuid 列表
     */
    services?: any[] | undefined;
    /**
     * 成功则返回本机蓝牙适配器状态
     */
    success?: ((result: GetConnectedBluetoothDevicesSuccess) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetConnectedBluetoothDevicesSuccess {
    /**
     * 搜索到的设备列表
     */
    devices?: GetConnectedBluetoothDevicesSuccessData[] | undefined;
    /**
     * 成功：ok，错误：详细信息
     */
    errMsg?: string | undefined;
}

interface GetConnectedBluetoothDevicesSuccessData {
    /**
     * 蓝牙设备名称，某些设备可能没有
     */
    name?: string | undefined;
    /**
     * 用于区分设备的 id
     */
    deviceId?: string | undefined;
}

interface CloseBLEConnectionOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
    /**
     * 蓝牙设备 id，参考 device 对象
     */
    deviceId?: string | undefined;
}

interface CreateBLEConnectionOptions {
    /**
     * 蓝牙设备 id，参考 getDevices 接口
     */
    deviceId?: string | undefined;
    /**
     * 超时时间
     */
    timeout?: number | undefined;
    /**
     * 成功则返回本机蓝牙适配器状态
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface OnBLEConnectionStateChangeSuccess {
    /**
     * 蓝牙设备 id，参考 device 对象
     */
    deviceId?: string | undefined;
    /**
     * 连接目前的状态
     */
    connected?: boolean | undefined;
}

interface GetBLEDeviceServicesOptions {
    /**
     * 蓝牙设备 id，参考 device 对象
     */
    deviceId?: string | undefined;
    /**
     * 成功则返回本机蓝牙适配器状态
     */
    success?: ((result: GetBLEDeviceServicesSuccess) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetBLEDeviceServicesSuccess {
    /**
     * 设备服务列表
     */
    services?: GetBLEDeviceServicesSuccessData[] | undefined;
    /**
     * 成功：ok，错误：详细信息
     */
    errMsg?: string | undefined;
}

interface GetBLEDeviceServicesSuccessData {
    /**
     * 蓝牙设备服务的 uuid
     */
    uuid?: string | undefined;
    /**
     * 该服务是否为主服务
     */
    isPrimary?: boolean | undefined;
}

interface GetBLEDeviceCharacteristicsOptions {
    /**
     * 蓝牙设备 id，参考 device 对象
     */
    deviceId?: string | undefined;
    /**
     * 蓝牙服务 uuid
     */
    serviceId?: string | undefined;
    /**
     * 成功则返回本机蓝牙适配器状态
     */
    success?: ((result: GetBLEDeviceCharacteristicsSuccess) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetBLEDeviceCharacteristicsSuccess {
    /**
     * 设备特征值列表
     */
    characteristics?: GetBLEDeviceCharacteristicsSuccessData[] | undefined;
    /**
     * 成功：ok，错误：详细信息
     */
    errMsg?: string | undefined;
}

interface GetBLEDeviceCharacteristicsSuccessData {
    /**
     * 蓝牙设备服务的 uuid
     */
    uuid?: string | undefined;
    /**
     * 该特征值支持的操作类型
     */
    properties?: any;
}

interface ReadBLECharacteristicValueOptions {
    /**
     * 蓝牙设备 id，参考 device 对象
     */
    deviceId?: string | undefined;
    /**
     * 蓝牙特征值对应服务的 uuid
     */
    serviceId?: string | undefined;
    /**
     * 蓝牙特征值的 uuid
     */
    characteristicId?: string | undefined;
    /**
     * 成功则返回本机蓝牙适配器状态
     */
    success?: ((result: ReadBLECharacteristicValueSuccess) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface ReadBLECharacteristicValueSuccess {
    /**
     * 错误码
     */
    errCode?: string | undefined;
    /**
     * 成功：ok，错误：详细信息
     */
    errMsg?: string | undefined;
}

interface WriteBLECharacteristicValueOptions {
    /**
     * 蓝牙设备 id，参考 device 对象
     */
    deviceId?: string | undefined;
    /**
     * 蓝牙特征值对应服务的 uuid
     */
    serviceId?: string | undefined;
    /**
     * 蓝牙特征值的 uuid
     */
    characteristicId?: string | undefined;
    /**
     * 蓝牙设备特征值对应的二进制值
     */
    value?: any[] | undefined;
    /**
     * 成功则返回本机蓝牙适配器状态
     */
    success?: ((result: StopBluetoothDevicesDiscoverySuccess) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface NotifyBLECharacteristicValueChangeOptions {
    /**
     * 蓝牙设备 id，参考 device 对象
     */
    deviceId?: string | undefined;
    /**
     * 蓝牙特征值对应服务的 uuid
     */
    serviceId?: string | undefined;
    /**
     * 蓝牙特征值的 uuid
     */
    characteristicId?: string | undefined;
    /**
     * true: 启用 notify; false: 停用 notify
     */
    state?: boolean | undefined;
    /**
     * 成功则返回本机蓝牙适配器状态
     */
    success?: ((result: StopBluetoothDevicesDiscoverySuccess) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface OnBLECharacteristicValueChangeSuccess {
    /**
     * 蓝牙设备 id，参考 device 对象
     */
    deviceId?: string | undefined;
    /**
     * 蓝牙特征值对应服务的 uuid
     */
    serviceId?: string | undefined;
    /**
     * 蓝牙特征值的 uuid
     */
    characteristicId?: string | undefined;
    /**
     * 特征值最新的值 （注意：vConsole 无法打印出 ArrayBuffer 类型数据）
     */
    value?: any[] | undefined;
}

interface StartBeaconDiscoveryOptions {
    /**
     * iBeacon设备广播的 uuids
     */
    uuids?: any[] | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface StopBeaconDiscoveryOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetBeaconsOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: GetBeaconsRes) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetBeaconsRes {
    /**
     * 接口调用成功的回调函数
     */
    beacons?: Beacon[] | undefined;
    /**
     * 调用结果
     */
    errMsg?: string | undefined;
}

interface Beacon {
    /**
     * iBeacon 设备广播的 uuid
     */
    uuid?: string | undefined;
    /**
     * iBeacon 设备的主 id
     */
    major?: string | undefined;
    /**
     * iBeacon 设备的次 id
     */
    minor?: string | undefined;
    /**
     * 表示设备距离的枚举值
     */
    proximity?: number | undefined;
    /**
     * iBeacon 设备的距离
     */
    accuracy?: number | undefined;
    /**
     * 表示设备的信号强度
     */
    rssi?: number | undefined;
}

interface BeaconService {
    /**
     * 服务目前是否可用
     */
    available?: boolean | undefined;
    /**
     * 目前是否处于搜索状态
     */
    discovering?: boolean | undefined;
}

interface GetHCEStateOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface StartHCEOptions {
    /**
     * 需要注册到系统的 AID 列表，每个 AID 为 String 类型
     */
    aid_list?: any[] | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface StopHCEOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface HCEMessageRes {
    /**
     * 消息类型
     */
    messageType?: number | undefined;
    /**
     * 客户端接收到 NFC 设备的指令
     */
    data?: any[] | undefined;
    /**
     * 此参数当且仅当 messageType=2 时有效
     */
    reason?: number | undefined;
}

interface SendHCEMessageOptions {
    /**
     * 二进制数据
     */
    data?: any[] | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface StartWifiOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface StopWifiOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface ConnectWifiOptions {
    /**
     * Wi-Fi 设备ssid
     */
    SSID?: string | undefined;
    /**
     * Wi-Fi 设备bssid
     */
    BSSID?: string | undefined;
    /**
     * Wi-Fi 设备密码
     */
    password?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetWifiListOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface WiFi {
    /**
     * Wi-Fi 的SSID
     */
    SSID?: string | undefined;
    /**
     * Wi-Fi 的BSSID
     */
    BSSID?: string | undefined;
    /**
     * Wi-Fi 是否安全
     */
    secure?: boolean | undefined;
    /**
     * Wi-Fi 信号强度
     */
    signalStrength?: number | undefined;
}

interface SetWifiListOptions {
    /**
     * Wi-Fi 的SSID
     */
    wifiList?: WiFiItem[] | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface WiFiItem {
    /**
     * Wi-Fi 的SSID
     */
    SSID?: string | undefined;
    /**
     * Wi-Fi 的BSSID
     */
    BSSID?: string | undefined;
    /**
     * Wi-Fi 设备密码
     */
    password?: string | undefined;
}

interface GetConnectedWifiOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: GetConnectedWifiRes) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetConnectedWifiRes {
    /**
     * 接口调用成功的回调函数
     */
    wifi?: WiFi | undefined;
}

interface ShowToastOptions {
    /**
     * 提示的内容
     */
    title?: string | undefined;
    /**
     * 图标
     * - success: 显示成功图标
     * - loading: 显示加载图标
     * - none: 不显示图标
     */
    icon?: "success" | "loading" | "none" | undefined;
    /**
     * 自定义图标的本地路径，image 的优先级高于 icon
     */
    image?: string | undefined;
    /**
     * 提示的延迟时间，单位毫秒，默认：1500
     */
    duration?: number | undefined;
    /**
     * 是否显示透明蒙层，防止触摸穿透，默认：false
     */
    mask?: boolean | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface ShowLoadingOptions {
    /**
     * 提示的内容
     */
    title?: string | undefined;
    /**
     * 是否显示透明蒙层，防止触摸穿透，默认：false
     */
    mask?: boolean | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface ShowModalOptions {
    /**
     * 提示的标题
     */
    title?: string | undefined;
    /**
     * 提示的内容
     */
    content?: string | undefined;
    /**
     * 是否显示取消按钮，默认为 true
     */
    showCancel?: boolean | undefined;
    /**
     * 取消按钮的文字，默认为"取消"
     */
    cancelText?: string | undefined;
    /**
     * 取消按钮的文字颜色，默认为"#000000"
     */
    cancelColor?: string | undefined;
    /**
     * 确定按钮的文字，默认为"确定"
     */
    confirmText?: string | undefined;
    /**
     * 确定按钮的文字颜色，默认为"#3CC51F"
     */
    confirmColor?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: ShowModalRes) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface ShowModalRes {
    /**
     * 为 true 时，表示用户点击了确定按钮
     */
    confirm?: boolean | undefined;
    /**
     * 为 true 时，表示用户点击了取消
     */
    cancel?: boolean | undefined;
}

interface ShowActionSheetOptions {
    /**
     * 按钮的文字数组
     */
    itemList?: any[] | undefined;
    /**
     * 按钮的文字颜色，默认为"#000000"
     */
    itemColor?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: ShowActionSheetRes) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface ShowActionSheetRes {
    /**
     * 用户点击的按钮，从上到下的顺序，从0开始
     */
    tapIndex?: number | undefined;
}

interface SetNavigationBarTitleOptions {
    /**
     * 页面标题
     */
    title?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface SetNavigationbarColorOptions {
    /**
     * 前景颜色值，包括按钮、标题、状态栏的颜色
     */
    frontColor?: string | undefined;
    /**
     * 背景颜色值，有效值为十六进制颜色
     */
    backgroundColor?: string | undefined;
    /**
     * 动画效果
     */
    animation?: NavigationBarAnimation | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface SetTabBarBadgeOptions {
    /**
     * tabBar的哪一项，从左边算起，索引从0开始
     */
    index?: number | undefined;
    /**
     * 显示的文本，不超过 3 个半角字符
     */
    text?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface RemoveTabBarBadgeOptions {
    /**
     * tabBar的哪一项，从左边算起，索引从0开始
     */
    index?: number | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface ShowTabBarRedDotOptions {
    /**
     * tabBar的哪一项，从左边算起，索引从0开始
     */
    index?: number | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface HideTabBarRedDotOptions {
    /**
     * tabBar的哪一项，从左边算起，索引从0开始
     */
    index?: number | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface NavigationBarAnimation {
    /**
     * 动画变化时间，默认0，单位：毫秒
     */
    duration?: number | undefined;
    /**
     * 动画变化方式，默认 linear
     * - linear: 动画从头到尾的速度是相同的
     * - easeIn: 动画以低速开始
     * - easeOut: 动画以低速结束
     * - easeInOut: 动画以低速开始和结束
     */
    timingFunc?: "linear" | "easeIn" | "easeOut" | "easeInOut" | undefined;
}

interface WindowResizeResult {
    /**
     * 变化后的窗口宽度，单位 px
     */
    windowWidth?: number | undefined;
    /**
     * 变化后的窗口高度，单位 px
     */
    windowHeight?: number | undefined;
}

interface SetTabBarBadgeOptions {
    /**
     * tabBar的哪一项，从左边算起，索引从0开始
     */
    index?: number | undefined;
    /**
     * 显示的文本
     */
    text?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface RemoveTabBarBadgeOptions {
    /**
     * tabBar的哪一项，从左边算起，索引从0开始
     */
    index?: number | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface ShowTabBarRedDotOptions {
    /**
     * tabBar的哪一项，从左边算起，索引从0开始
     */
    index?: number | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface HideTabBarRedDotOptions {
    /**
     * tabBar的哪一项，从左边算起，索引从0开始
     */
    index?: number | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface SetTabBarStyleOptions {
    /**
     * tab 上的文字默认颜色
     */
    color?: string | undefined;
    /**
     * tab 上的文字选中时的颜色
     */
    selectedColor?: string | undefined;
    /**
     * tab 的背景色
     */
    backgroundColor?: string | undefined;
    /**
     * tabbar上边框的颜色
     */
    borderStyle?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface SetTabBarItemOptions {
    /**
     * tabBar 的哪一项，从左边算起，索引从0开始
     */
    index?: number | undefined;
    /**
     * tab 上按钮文字
     */
    text?: string | undefined;
    /**
     * 图片路径
     */
    iconPath?: string | undefined;
    /**
     * 选中时的图片路径
     */
    selectedIconPath?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface ShowTabBarOptions {
    /**
     * 是否需要动画效果
     */
    animation?: boolean | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface HideTabBarOptions {
    /**
     * 是否需要动画效果
     */
    animation?: boolean | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface SetTopBarTextOptions {
    /**
     * 置顶栏文字内容
     */
    text?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface NavigateToOptions {
    /**
     * 需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数
     */
    url?: string | string | undefined;
    /**
     * 窗口显示的动画类型
     * - auto: 自动选择动画效果
     * - none: 无动画效果
     * - slide-in-right: 从右侧横向滑动效果
     * - slide-in-left: 左侧横向滑动效果
     * - slide-in-top: 从上侧竖向滑动效果
     * - slide-in-bottom: 从下侧竖向滑动效果
     * - fade-in: 从透明到不透明逐渐显示效果
     * - zoom-out: 从小到大逐渐放大显示效果
     * - zoom-fade-out: 从小到大逐渐放大并且从透明到不透明逐渐显示效果
     * - pop-in: 从右侧平移入栈动画效果
     */
    animationType?:
        | "auto"
        | "none"
        | "slide-in-right"
        | "slide-in-left"
        | "slide-in-top"
        | "slide-in-bottom"
        | "fade-in"
        | "zoom-out"
        | "zoom-fade-out"
        | "pop-in"
        | undefined;
    /**
     * 窗口显示动画的持续时间，单位为 ms
     */
    animationDuration?: number | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface RedirectToOptions {
    /**
     * 需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数
     */
    url?: string | string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface ReLaunchOptions {
    /**
     * 需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数
     */
    url?: string | string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface SwitchTabOptions {
    /**
     * 需要跳转的 tabBar 页面的路径，路径后不能带参数
     */
    url?: string | string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface CreateIntersectionObserverOptions {
    /**
     * 所有阈值
     */
    thresholds?: any[] | undefined;
    /**
     * 初始的相交比例
     */
    initialRatio?: number | undefined;
    /**
     * 是否同时观测多个参照节点（而非一个）
     */
    selectAll?: boolean | undefined;
}

interface NavigateBackOptions {
    /**
     * 返回的页面数，如果 delta 大于现有页面数，则返回到首页
     */
    delta?: number | undefined;
    /**
     * 窗口关闭的动画类型
     * - auto: 自动选择动画效果
     * - none: 无动画效果
     * - slide-out-right: 横向向右侧滑出屏幕动画
     * - slide-out-left: 横向向左侧滑出屏幕动画
     * - slide-out-top: 竖向向上侧滑出屏幕动画
     * - slide-out-bottom: 竖向向下侧滑出屏幕动画
     * - fade-out: 从不透明到透明逐渐隐藏动画
     * - zoom-in: 从大逐渐缩小关闭动画
     * - zoom-fade-in: 从大逐渐缩小并且从不透明到透明逐渐隐藏关闭动画
     * - pop-out: 从右侧平移出栈动画效果
     */
    animationType?:
        | "auto"
        | "none"
        | "slide-out-right"
        | "slide-out-left"
        | "slide-out-top"
        | "slide-out-bottom"
        | "fade-out"
        | "zoom-in"
        | "zoom-fade-in"
        | "pop-out"
        | undefined;
    /**
     * 窗口关闭动画的持续时间，单位为 ms
     */
    animationDuration?: number | undefined;
}

interface CreateAnimationOptions {
    /**
     * 动画持续时间，单位ms
     */
    duration?: number | undefined;
    /**
     * 定义动画的效果
     * - linear: 动画从头到尾的速度是相同的
     * - ease: 动画以低速开始，然后加快，在结束前变慢
     * - ease-in: 动画以低速开始
     * - ease-in-out: 动画以低速开始和结束
     * - ease-out: 动画以低速结束
     * - step-start: 动画第一帧就跳至结束状态直到结束
     * - step-end: 动画一直保持开始状态，最后一帧跳到结束状态
     */
    timingFunction?: "linear" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | "step-start" | "step-end" | undefined;
    /**
     * 动画延迟时间，单位 ms
     */
    delay?: number | undefined;
    /**
     * 设置transform-origin
     */
    transformOrigin?: string | undefined;
}

interface PageScrollToOptions {
    /**
     * 滚动到页面的目标位置
     */
    scrollTop?: number | undefined;
    /**
     * 滚动动画的时长
     */
    duration?: number | undefined;
}

interface StartPullDownRefreshOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface SelectorQuery {
    /**
     * 将选择器的选取范围更改为自定义组件component内
     */
    in(component?: any): SelectorQuery;
    /**
     * 在当前页面下选择第一个匹配选择器selector的节点
     */
    select(selector?: string): NodesRef;
    /**
     * 在当前页面下选择匹配选择器selector的所有节点
     */
    selectAll(selector?: string): NodesRef;
    /**
     * 选择显示区域
     */
    selectViewport(selector?: string): NodesRef;
    /**
     * 执行所有的请求
     */
    exec(callback?: () => void): NodesRef;
}

interface NodesRef {
    /**
     * 添加节点的布局位置的查询请求，相对于显示区域，以像素为单位
     */
    boundingClientRect(callback?: (result: NodeInfo) => void): SelectorQuery;
    /**
     * 添加节点的滚动位置查询请求，以像素为单位
     */
    scrollOffset(callback?: (result: NodeInfo) => void): SelectorQuery;
    /**
     * 获取节点的相关信息，需要获取的字段在fields中指定
     */
    fields(fields?: NodeField, callback?: (result: NodeInfo) => void): SelectorQuery;
    /**
     * 添加节点的 Context 对象查询请求
     */
    context(callback?: (result: NodeInfo) => void): SelectorQuery;
}

interface NodeInfo {
    /**
     * 节点的ID
     */
    id?: string | undefined;
    /**
     * 节点的dataset
     */
    dataset?: any;
    /**
     * 节点的左边界坐标
     */
    left?: number | undefined;
    /**
     * 节点的右边界坐标
     */
    right?: number | undefined;
    /**
     * 节点的上边界坐标
     */
    top?: number | undefined;
    /**
     * 节点的下边界坐标
     */
    bottom?: number | undefined;
    /**
     * 节点的宽度
     */
    width?: number | undefined;
    /**
     * 节点的高度
     */
    height?: number | undefined;
    /**
     * 节点的水平滚动位置
     */
    scrollLeft?: number | undefined;
    /**
     * 节点的垂直滚动位置
     */
    scrollTop?: number | undefined;
    /**
     * 节点对应的 Context 对象
     */
    context?: MapContext | CanvasContext | VideoContext | EditorContext | undefined;
}

interface EditorContext {
    /**
     * 修改样式
     */
    format(name?: string, value?: string): void;
    /**
     * 插入分割线
     */
    insertDivider(): void;
    /**
     * 获取节点的相关信息，需要获取的字段在fields中指定
     */
    insertImage(options?: EditorContextInsertImageOptions): void;
    /**
     * 添加节点的 Context 对象查询请求
     */
    insertText(options?: EditorContextInsertTextOptions): void;
    /**
     * 初始化编辑器内容，hmlt和delta同时存在时仅delta生效
     */
    setContents(options?: EditorContextSetContentsOptions): void;
    /**
     * 初始化编辑器内容，hmlt和delta同时存在时仅delta生效
     */
    getContents(options?: EditorContextGetContentsOptions): void;
    /**
     * 初始化编辑器内容，hmlt和delta同时存在时仅delta生效
     */
    clear(options?: EditorContextClearOptions): void;
    /**
     * 清除当前选区的样式
     */
    removeFormat(options?: EditorContextRemoveFormatOptions): void;
    /**
     * 撤销
     */
    undo(options?: EditorContextUndoOptions): void;
    /**
     * 撤销
     */
    redo(options?: EditorContextRedoOptions): void;
}

interface EditorContextInsertImageOptions {
    /**
     * 图片地址
     */
    src?: string | undefined;
    /**
     * 图像无法显示时的替代文本
     */
    alt?: string | undefined;
    /**
     * data 被序列化为 name=value;name1=value2 的格式挂在属性 data-custom 上
     */
    data?: any;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface EditorContextInsertTextOptions {
    /**
     * 文本内容
     */
    text?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface EditorContextSetContentsOptions {
    /**
     * 带标签的HTML内容
     */
    html?: string | undefined;
    /**
     * 表示内容的delta对象
     */
    delta?: any;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface EditorContextGetContentsOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface EditorContextClearOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface EditorContextRemoveFormatOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface EditorContextUndoOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface EditorContextRedoOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface NodeField {
    /**
     * 是否返回节点 id
     */
    id?: boolean | undefined;
    /**
     * 是否返回节点 dataset
     */
    dataset?: boolean | undefined;
    /**
     * 是否返回节点布局位置（left right top bottom）
     */
    rect?: boolean | undefined;
    /**
     * 是否返回节点尺寸（width height）
     */
    size?: boolean | undefined;
    /**
     * 是否返回节点的 scrollLeft scrollTop，节点必须是 scroll-view 或者 viewport
     */
    scrollOffset?: boolean | undefined;
    /**
     * 指定属性名列表，返回节点对应属性名的当前属性值（只能获得组件文档中标注的常规属性值，id class style 和事件绑定的属性值不可获取）
     */
    properties?: string[] | undefined;
    /**
     * 指定样式名列表，返回节点对应样式名的当前值
     */
    computedStyle?: string[] | undefined;
    /**
     * 是否返回节点对应的 Context 对象
     */
    context?: boolean | undefined;
}

interface IntersectionObserver {
    /**
     * 使用选择器指定一个节点，作为参照区域之一
     */
    relativeTo(selector?: string, margins?: any[]): void;
    /**
     * 指定页面显示区域作为参照区域之一
     */
    relativeToViewport(margins?: any[]): void;
    /**
     * 指定目标节点并开始监听相交状态变化情况
     */
    observe(targetSelector?: string, callback?: (result: ObserveResult) => void): void;
    /**
     * 停止监听
     */
    disconnect(): void;
}

interface ObserveResult {
    /**
     * 相交比例
     */
    intersectionRatio?: number | undefined;
    /**
     * 相交区域的边界
     */
    intersectionRect?: any;
    /**
     * 目标节点布局区域的边界
     */
    boundingClientRect?: ObserveNodeRect | undefined;
    /**
     * 参照区域的边界
     */
    relativeRect?: ObserveNodeRect | undefined;
    /**
     * 相交检测时的时间戳
     */
    time?: number | undefined;
}

interface ObserveNodeRect {
    /**
     * left
     */
    left?: number | undefined;
    /**
     * right
     */
    right?: number | undefined;
    /**
     * top
     */
    top?: number | undefined;
    /**
     * bottom
     */
    bottom?: number | undefined;
}

interface Animation {
    /**
     * 透明度
     */
    opacity(value?: number): void;
    /**
     * 颜色值
     */
    backgroundColor(color?: number): void;
    /**
     * 长度值
     */
    width(length?: number): void;
    /**
     * 长度值
     */
    height(length?: number): void;
    /**
     * 长度值
     */
    top(length?: number): void;
    /**
     * 长度值
     */
    left(length?: number): void;
    /**
     * 长度值
     */
    bottom(length?: number): void;
    /**
     * 长度值
     */
    right(length?: number): void;
    /**
     * 从原点顺时针旋转一个deg角度
     */
    rotate(deg?: number): void;
    /**
     * 在X轴旋转一个deg角度
     */
    rotateX(deg?: number): void;
    /**
     * 在Y轴旋转一个deg角度
     */
    rotateY(deg?: number): void;
    /**
     * 在Z轴旋转一个deg角度
     */
    rotateZ(deg?: number): void;
    /**
     * 同transform-function rotate3d
     */
    rotate3d(x?: number, y?: number, z?: number, deg?: number): void;
    /**
     * 缩放
     */
    scale(sx?: number, sy?: number): void;
    /**
     * 在X轴缩放sx倍数
     */
    scaleX(sx?: number): void;
    /**
     * 在Y轴缩放sy倍数
     */
    scaleY(sy?: number): void;
    /**
     * 在Z轴缩放sz倍数
     */
    scaleZ(sz?: number): void;
    /**
     * 在X轴缩放sx倍数，在Y轴缩放sy倍数，在Z轴缩放sz倍数
     */
    scale3d(sx?: number, sy?: number, sz?: number): void;
    /**
     * 偏移
     */
    translate(tx?: number, ty?: number): void;
    /**
     * 在X轴偏移tx
     */
    translateX(tx?: number): void;
    /**
     * 在Y轴偏移ty
     */
    translateY(ty?: number): void;
    /**
     * 在Z轴偏移tx
     */
    translateZ(tz?: number): void;
    /**
     * 在X轴偏移tx，在Y轴偏移ty，在Z轴偏移tz
     */
    translate3d(tx?: number, ty?: number, tz?: number): void;
    /**
     * 倾斜
     */
    skew(ax?: number, ay?: number): void;
    /**
     * Y轴坐标不变，X轴坐标延顺时针倾斜ax度
     */
    skewX(ax?: number): void;
    /**
     * X轴坐标不变，Y轴坐标延顺时针倾斜ay度
     */
    skewY(ay?: number): void;
    /**
     * 矩阵变形
     */
    matrix(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number): void;
    /**
     * 矩阵变形
     */
    matrix3d(): void;
}

interface CanvasContext {
    /**
     * 填充色
     */
    fillStyle?: string | CanvasGradient | CanvasPattern | undefined;
    /**
     * 边框颜色
     */
    strokeStyle?: string | CanvasGradient | CanvasPattern | undefined;
    /**
     * 阴影的模糊级别
     */
    shadowBlur?: number | undefined;
    /**
     * 阴影的颜色
     */
    shadowColor?: string | undefined;
    /**
     * 阴影相对于形状在水平方向的偏移
     */
    shadowOffsetX?: number | undefined;
    /**
     * 阴影相对于形状在竖直方向的偏移
     */
    shadowOffsetY?: number | undefined;
    /**
     * 线条的宽度
     */
    lineWidth?: number | undefined;
    /**
     * 线条的端点样式
     * - butt:
     * - round:
     * - square:
     */
    lineCap?: "butt" | "round" | "square" | undefined;
    /**
     * 线条的结束交点样式
     * - bevel:
     * - round:
     * - miter:
     */
    lineJoin?: "bevel" | "round" | "miter" | undefined;
    /**
     * 最大斜接长度
     */
    miterLimit?: number | undefined;
    /**
     * 透明度
     */
    globalAlpha?: number | undefined;
    /**
     * 设置要在绘制新形状时应用的合成操作的类型
     */
    globalCompositeOperation?: string | undefined;
    /**
     * 偏移量
     */
    lineDashOffset?: number | undefined;
    /**
     * 字体样式
     */
    font?: string | undefined;
    /**
     * 设置填充色
     */
    setFillStyle(color?: string | CanvasGradient | CanvasPattern): void;
    /**
     * 设置边框颜色
     */
    setStrokeStyle(color?: string | CanvasGradient | CanvasPattern): void;
    /**
     * 设置阴影样式
     */
    setShadow(offsetX?: number, offsetY?: number, blur?: number, color?: string): void;
    /**
     * 创建一个线性的渐变颜色
     */
    createLinearGradient(x0?: number, y0?: number, x1?: number, y1?: number): CanvasGradient;
    /**
     * 创建一个圆形的渐变颜色
     */
    createCircularGradient(x?: number, y?: number, r?: number): CanvasGradient;
    /**
     * 设置线条的宽度
     */
    setLineWidth(lineWidth?: number): void;
    /**
     * 设置线条的端点样式
     */
    setLineCap(lineCap?: "butt" | "round" | "square"): void;
    /**
     * 设置线条的交点样式
     */
    setLineJoin(lineJoin?: "bevel" | "round" | "miter"): void;
    /**
     * 设置线条的宽度
     */
    setLineDash(pattern?: any[], offset?: number): void;
    /**
     * 设置最大斜接长度
     */
    setMiterLimit(miterLimit?: number): void;
    /**
     * 创建一个矩形
     */
    rect(x?: number, y?: number, width?: number, height?: number): void;
    /**
     * 填充一个矩形
     */
    fillRect(x?: number, y?: number, width?: number, height?: number): void;
    /**
     * 画一个矩形(非填充)
     */
    strokeRect(x?: number, y?: number, width?: number, height?: number): void;
    /**
     * 清除画布上在该矩形区域内的内容
     */
    clearRect(x?: number, y?: number, width?: number, height?: number): void;
    /**
     * 对当前路径中的内容进行填充
     */
    fill(): void;
    /**
     * 画出当前路径的边框
     */
    stroke(): void;
    /**
     * 开始创建一个路径
     */
    beginPath(): void;
    /**
     * 关闭一个路径
     */
    closePath(): void;
    /**
     * 把路径移动到画布中的指定点，不创建线条
     */
    moveTo(x?: number, y?: number): void;
    /**
     * 增加一个新点，然后创建一条从上次指定点到目标点的线
     */
    lineTo(x?: number, y?: number): void;
    /**
     * 画一条弧线
     */
    arc(x?: number, y?: number, r?: number, sAngle?: number, eAngle?: number, counterclockwise?: boolean): void;
    /**
     * 创建三次方贝塞尔曲线路径
     */
    bezierCurveTo(cp1x?: number, cp1y?: number, cp2x?: number, cp2y?: number, x?: number, y?: number): void;
    /**
     * 创建二次贝塞尔曲线路径
     */
    quadraticCurveTo(cpx?: number, cpy?: number, x?: number, y?: number): void;
    /**
     * 横纵坐标缩放
     */
    scale(scaleWidth?: number, scaleHeight?: number): void;
    /**
     * 顺时针旋转当前坐标轴
     */
    rotate(rotate?: number): void;
    /**
     * 对当前坐标系的原点(0, 0)进行变换
     */
    translate(x?: number, y?: number): void;
    /**
     * 从原始画布中剪切任意形状和尺寸
     */
    clip(): void;
    /**
     * 设置字体的字号
     */
    setFontSize(fontSize?: number): void;
    /**
     * 在画布上绘制被填充的文本
     */
    fillText(text?: string, x?: number, y?: number, maxWidth?: number): void;
    /**
     * 设置文字的对齐
     */
    setTextAlign(align?: "left" | "center" | "right"): void;
    /**
     * 设置文字的水平对齐
     */
    setTextBaseline(textBaseline?: "top" | "bottom" | "middle" | "normal"): void;
    /**
     * 绘制图像到画布
     */
    drawImage(imageResource: string, dx: number, dy: number): void;
    drawImage(imageResource: string, dx: number, dy: number, dWidth: number, dHeigt: number): void;
    drawImage(
        imageResource: string,
        sx: number,
        sy: number,
        sWidth: number,
        sHeigt: number,
        dx: number,
        dy: number,
        dWidth: number,
        dHeight: number,
    ): void;
    /**
     * 设置全局画笔透明度
     */
    setGlobalAlpha(alpha?: number): void;
    /**
     * 保存当前的绘图上下文
     */
    save(): void;
    /**
     * 恢复之前保存的绘图上下文
     */
    restore(): void;
    /**
     * 将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中
     */
    draw(reserve?: boolean, callback?: () => void): void;
    /**
     * 测量文本尺寸信息，目前仅返回文本宽度
     */
    measureText(text?: string): CanvasTextMetrics;
    /**
     * 根据控制点和半径绘制圆弧路径
     */
    arcTo(x1?: number, y1?: number, x2?: number, y2?: number, radius?: number): void;
    /**
     * 给定的 (x, y) 位置绘制文本描边的方法
     */
    strokeText(text?: string, x?: number, y?: number, maxWidth?: number): void;
    /**
     * 对指定的图像创建模式的方法，可在指定的方向上重复元图像
     */
    createPattern(image?: string, repetition?: "repeat" | "repeat-x" | "repeat-y" | "no-repeat"): CanvasPattern | null;
    /**
     * 使用矩阵重新设置（覆盖）当前变换的方法
     */
    setTransform(
        scaleX?: number,
        skewX?: number,
        skewY?: number,
        scaleY?: number,
        translateX?: number,
        translateY?: number,
    ): void;
}

interface CanvasGradient {
    /**
     * 创建一个颜色的渐变点
     */
    addColorStop(stop?: number, color?: string): void;
}

// tslint:disable-next-line no-empty-interface
interface CanvasPattern {
}

interface CanvasTextMetrics {
    /**
     * 文本的宽度
     */
    width?: number | undefined;
}

interface CanvasToTempFilePathOptions {
    /**
     * 画布x轴起点（默认0）
     */
    x?: number | undefined;
    /**
     * 画布y轴起点（默认0）
     */
    y?: number | undefined;
    /**
     * 画布宽度（默认为canvas宽度-x）
     */
    width?: number | undefined;
    /**
     * 画布高度（默认为canvas高度-y）
     */
    height?: number | undefined;
    /**
     * 输出图片宽度（默认为 width * 屏幕像素密度）
     */
    destWidth?: number | undefined;
    /**
     * 输出图片高度（默认为 height * 屏幕像素密度）
     */
    destHeight?: number | undefined;
    /**
     * 画布标识，传入 <canvas/> 的 canvas-id
     */
    canvasId?: string | undefined;
    /**
     * 目标文件的类型，默认为 'png'
     */
    fileType?: string | undefined;
    /**
     * 图片的质量，取值范围为 (0, 1]，不在范围内时当作1.0处理
     */
    quality?: number | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: CanvasToTempFilePathRes) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface CanvasToTempFilePathRes {
    /**
     * 导出生成的图片路径
     */
    tempFilePath?: string | undefined;
}

interface CanvasGetImageDataOptions {
    /**
     * 画布标识，传入 <canvas/> 的 canvas-id
     */
    canvasId?: string | undefined;
    /**
     * 将要被提取的图像数据矩形区域的左上角 x 坐标
     */
    x?: number | undefined;
    /**
     * 将要被提取的图像数据矩形区域的左上角 y 坐标
     */
    y?: number | undefined;
    /**
     * 将要被提取的图像数据矩形区域的宽度
     */
    width?: number | undefined;
    /**
     * 将要被提取的图像数据矩形区域的高度
     */
    height?: number | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: CanvasGetImageDataRes) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface CanvasGetImageDataRes {
    /**
     * 回调信息
     */
    errMsg?: string | undefined;
    /**
     * 图像数据矩形的宽度
     */
    width?: number | undefined;
    /**
     * 图像数据矩形的高度
     */
    height?: number | undefined;
    /**
     * 图像像素点数据，一维数组，每四项表示一个像素点的rgba
     */
    data?: any[] | undefined;
}

interface CanvasPutImageDataOptions {
    /**
     * 画布标识，传入 <canvas/> 的 canvas-id
     */
    canvasId?: string | undefined;
    /**
     * 图像像素点数据，一维数组，每四项表示一个像素点的rgba
     */
    data?: any[] | undefined;
    /**
     * 源图像数据在目标画布中的位置偏移量（x 轴方向的偏移量）
     */
    x?: number | undefined;
    /**
     * 源图像数据在目标画布中的位置偏移量（y 轴方向的偏移量）
     */
    y?: number | undefined;
    /**
     * 源图像数据矩形区域的宽度
     */
    width?: number | undefined;
    /**
     * 源图像数据矩形区域的高度
     */
    height?: number | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface SetScreenBrightnessOptions {
    /**
     * 屏幕亮度值，范围 0~1，0 最暗，1 最亮
     */
    value?: number | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetScreenBrightnessOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: GetScreenBrightnessSuccessRes) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetScreenBrightnessSuccessRes {
    /**
     * 屏幕亮度值，范围 0~1，0 最暗，1 最亮。
     */
    value?: number | undefined;
}

interface SetKeepScreenOnOptions {
    /**
     * 是否保持屏幕常亮
     */
    keepScreenOn?: boolean | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface VibrateLongOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface VibrateShortOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface AddPhoneContactOptions {
    /**
     * 头像本地文件路径
     */
    photoFilePath?: string | undefined;
    /**
     * 昵称
     */
    nickName?: string | undefined;
    /**
     * 姓氏
     */
    lastName?: string | undefined;
    /**
     * 中间名
     */
    middleName?: string | undefined;
    /**
     * 名字
     */
    firstName?: string | undefined;
    /**
     * 备注
     */
    remark?: string | undefined;
    /**
     * 手机号
     */
    mobilePhoneNumber?: string | undefined;
    /**
     * 微信号
     */
    weChatNumber?: string | undefined;
    /**
     * 联系地址国家
     */
    addressCountry?: string | undefined;
    /**
     * 联系地址省份
     */
    addressState?: string | undefined;
    /**
     * 联系地址城市
     */
    addressCity?: string | undefined;
    /**
     * 联系地址街道
     */
    addressStreet?: string | undefined;
    /**
     * 联系地址邮政编码
     */
    addressPostalCode?: string | undefined;
    /**
     * 公司
     */
    organization?: string | undefined;
    /**
     * 职位
     */
    title?: string | undefined;
    /**
     * 工作传真
     */
    workFaxNumber?: string | undefined;
    /**
     * 工作电话
     */
    workPhoneNumber?: string | undefined;
    /**
     * 公司电话
     */
    hostNumber?: string | undefined;
    /**
     * 电子邮件
     */
    email?: string | undefined;
    /**
     * 网站
     */
    url?: string | undefined;
    /**
     * 工作地址国家
     */
    workAddressCountry?: string | undefined;
    /**
     * 工作地址省份
     */
    workAddressState?: string | undefined;
    /**
     * 工作地址城市
     */
    workAddressCity?: string | undefined;
    /**
     * 工作地址街道
     */
    workAddressStreet?: string | undefined;
    /**
     * 工作地址邮政编码
     */
    workAddressPostalCode?: string | undefined;
    /**
     * 住宅传真
     */
    homeFaxNumber?: string | undefined;
    /**
     * 住宅电话
     */
    homePhoneNumber?: string | undefined;
    /**
     * 住宅地址国家
     */
    homeAddressCountry?: string | undefined;
    /**
     * 住宅地址省份
     */
    homeAddressState?: string | undefined;
    /**
     * 住宅地址城市
     */
    homeAddressCity?: string | undefined;
    /**
     * 住宅地址街道
     */
    homeAddressStreet?: string | undefined;
    /**
     * 住宅地址邮政编码
     */
    homeAddressPostalCode?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetExtConfigOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: GetExtConfigRes) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetExtConfigRes {
    /**
     * 调用结果
     */
    errMsg?: string | undefined;
    /**
     * 第三方平台自定义的数据
     */
    extConfig?: any;
}

interface GetExtConfigSyncRes {
    /**
     * 第三方平台自定义的数据
     */
    extConfig?: any;
}

interface GetMenuButtonBoundingClientRectRes {
    /**
     * 小程序胶囊菜单按钮的宽度
     */
    width?: number | undefined;
    /**
     * 小程序胶囊菜单按钮的高度
     */
    height?: number | undefined;
    /**
     * 小程序胶囊菜单按钮的上边界坐标
     */
    top?: number | undefined;
    /**
     * 小程序胶囊菜单按钮的右边界坐标
     */
    right?: number | undefined;
    /**
     * 小程序胶囊菜单按钮的下边界坐标
     */
    bottom?: number | undefined;
    /**
     * 小程序胶囊菜单按钮的左边界坐标
     */
    left?: number | undefined;
}

interface GetProviderOptions {
    /**
     * 服务类型，可取值“oauth”、“share”、“payment”、“push”
     * - oauth: 授权登录
     * - share: 分享
     * - payment: 支付
     * - push: 推送
     */
    service?: "oauth" | "share" | "payment" | "push" | undefined;
    /**
     * 接口调用成功的回调
     */
    success?: ((result: GetProviderRes) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetProviderRes {
    /**
     * 服务类型
     * - oauth: 授权登录
     * - share: 分享
     * - payment: 支付
     * - push: 推送
     */
    service?: "oauth" | "share" | "payment" | "push" | undefined;
    /**
     * 得到的服务供应商
     */
    provider?: any[] | undefined;
}

interface LoginOptions {
    /**
     * 授权登录服务提供商，通过uni.getProvider获取，如果不设置则弹出分享列表选择界面
     * - weixin: 微信登录
     * - qq: QQ登录
     * - sinaweibo: 新浪微博登录
     * - xiaomi: 小米登录
     */
    provider?: "weixin" | "qq" | "sinaweibo" | "xiaomi" | undefined;
    /**
     * 超时时间，单位 ms
     */
    timeout?: number | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: LoginRes) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface LoginRes {
    /**
     * 描述信息
     */
    errMsg?: string | undefined;
    /**
     * 登录服务商提供的登录信息，服务商不同返回的结果不完全相同
     */
    authResult?: string | undefined;
    /**
     * 小程序用户临时登录凭证
     */
    code?: string | undefined;
    /**
     * 头条小程序当前设备标识
     */
    anonymousCode?: string | undefined;
    /**
     * 支付宝小程序授权码
     */
    authCode?: string | undefined;
    /**
     * 支付宝小程序登录失败的授权类型，key是授权失败的 scope，value 是对应的错误码
     */
    authErrorScope?: any;
    /**
     * 支付宝小程序登录成功的授权 scope
     */
    authSucessScope?: string[] | undefined;
}

interface CheckSessionOptions {
    /**
     * 接口调用成功的回调函数，session_key未过期
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数，session_key已过期
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface AuthorizeOptions {
    /**
     * 需要获取权限的scope
     */
    scope?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetUserInfoOptions {
    /**
     * 授权登录服务提供商，通过uni.getProvider获取
     * - weixin: 微信登录
     * - qq: QQ登录
     * - sinaweibo: 新浪微博登录
     * - xiaomi: 小米登录
     */
    provider?: "weixin" | "qq" | "sinaweibo" | "xiaomi" | undefined;
    /**
     * 是否带上登录态信息，仅微信小程序生效。
     */
    withCredentials?: boolean | undefined;
    /**
     * 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。默认为en，仅微信小程序生效。
     */
    lang?: string | undefined;
    /**
     * 超时时间，单位 ms
     */
    timeout?: number | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: GetUserInfoRes) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetUserInfoRes {
    /**
     * 用户信息对象，不包含 openid 等敏感信息
     */
    userInfo?: UserInfo | undefined;
    /**
     * 不包括敏感信息的原始数据字符串，用于计算签名。
     */
    rawData?: string | undefined;
    /**
     * 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息，仅微信小程序生效。
     */
    signature?: string | undefined;
    /**
     * 包括敏感数据在内的完整用户信息的加密数据，详细见加密数据解密算法，仅微信小程序生效。
     */
    encryptedData?: string | undefined;
    /**
     * 加密算法的初始向量，详细见加密数据解密算法，仅微信小程序生效。
     */
    iv?: string | undefined;
    /**
     * 描述信息
     */
    errMsg?: string | undefined;
}

interface UserInfo {
    /**
     * 用户昵称
     */
    nickname?: string | undefined;
    /**
     * 该服务商唯一用户标识
     */
    openid?: string | undefined;
    /**
     * 用户头像
     */
    avatarUrl?: string | undefined;
}

interface ShareOptions {
    /**
     * 分享服务提供商，通过uni.getProvider获取，如果不设置则弹出分享列表选择界面
     * - sinaweibo: 新浪微博分享
     * - qq: 分享到QQ好友
     * - weixin: 分享微信消息、朋友圈及微信小程序
     */
    provider?: "sinaweibo" | "qq" | "weixin" | undefined;
    /**
     * 分享类型。默认图文0，纯文字1，纯图片2，音乐3，视频4，小程序5。
     * - 0: 图文
     * - 1: 纯文字
     * - 2: 纯图片
     * - 3: 音乐
     * - 4: 视频
     * - 5: 小程序
     */
    type?: "0" | "1" | "2" | "3" | "4" | "5" | undefined;
    /**
     * 标题
     */
    title?: string | undefined;
    /**
     * 场景。可取值“WXSceneSession”分享到聊天界面，“WXSenceTimeline”分享到朋友圈，“WXSceneFavorite”分享到微信收藏
     */
    scene?: string | undefined;
    /**
     * 摘要
     */
    summary?: string | undefined;
    /**
     * 跳转链接
     */
    href?: string | undefined;
    /**
     * 图片地址
     */
    imageUrl?: string | undefined;
    /**
     * 音视频地址
     */
    mediaUrl?: string | undefined;
    /**
     * 分享小程序
     */
    miniProgram?: MiniProgramShareOptions | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface MiniProgramShareOptions {
    /**
     * 微信小程序原始id
     */
    id?: string | undefined;
    /**
     * 点击链接进入的页面
     */
    path?: string | undefined;
    /**
     * 微信小程序版本类型，默认为0。
     * - 0: 正式版
     * - 1: 测试版
     * - 2: 体验版
     */
    type?: "0" | "1" | "2" | undefined;
    /**
     * 兼容低版本的网页链接
     */
    webUrl?: string | undefined;
}

interface SubscribePushOptions {
    /**
     * 推送服务提供商，通过uni.getProvider获取
     * - unipush: UniPush
     * - igexin: 个推
     * - mipush: 小米推送
     */
    provider?: "unipush" | "igexin" | "mipush" | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface UnscribePushOptions {
    /**
     * 推送服务提供商，通过uni.getProvider获取
     * - unipush: UniPush
     * - igexin: 个推
     * - mipush: 小米推送
     */
    provider?: "unipush" | "igexin" | "mipush" | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface OnPushOptions {
    /**
     * 推送服务提供商，通过uni.getProvider获取
     * - unipush: UniPush
     * - igexin: 个推
     * - mipush: 小米推送
     */
    provider?: "unipush" | "igexin" | "mipush" | undefined;
    /**
     * 接收到透传数据回调，回调参数（Object）：messageId（消息id）、data（消息内容）
     */
    callback?: (() => void) | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface OffPushOptions {
    /**
     * 推送服务提供商，通过uni.getProvider获取
     * - unipush: UniPush
     * - igexin: 个推
     * - mipush: 小米推送
     */
    provider?: "unipush" | "igexin" | "mipush" | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface ShowShareMenuOptions {
    /**
     * 是否使用带 shareTicket 的转发
     */
    withShareTicket?: boolean | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface HideShareMenuOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface UpdateShareMenuOptions {
    /**
     * 是否使用带 shareTicket 的转发
     */
    withShareTicket?: boolean | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetShareInfoOptions {
    /**
     * shareTicket
     */
    shareTicket?: string | undefined;
    /**
     * 超时时间，单位 ms
     */
    timeout?: number | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: GetShareInfoRes) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetShareInfoRes {
    /**
     * 错误信息
     */
    errMsg?: string | undefined;
    /**
     * 包括敏感数据在内的完整转发信息的加密数据
     */
    encryptedData?: string | undefined;
    /**
     * 加密算法的初始向量
     */
    iv?: string | undefined;
}

interface ChooseAddressOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: ChooseAddressRes) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface ChooseAddressRes {
    /**
     * 调用结果
     */
    errMsg?: string | undefined;
    /**
     * 收货人姓名
     */
    userName?: string | undefined;
    /**
     * 邮编
     */
    postalCode?: string | undefined;
    /**
     * 国标收货地址第一级地址
     */
    provinceName?: string | undefined;
    /**
     * 国标收货地址第二级地址
     */
    cityName?: string | undefined;
    /**
     * 国标收货地址第三级地址
     */
    countyName?: string | undefined;
    /**
     * 详细收货地址信息
     */
    detailInfo?: string | undefined;
    /**
     * 收货地址国家码
     */
    nationalCode?: string | undefined;
    /**
     * 收货人手机号码
     */
    telNumber?: string | undefined;
}

interface AddCardOptions {
    /**
     * 需要添加的卡券列表
     */
    cardList?: AddCardData[] | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: AddCardRes) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface AddCardData {
    /**
     * 卡券 id
     */
    cardId?: string | undefined;
    /**
     * 卡券的扩展参数
     */
    cardExt?: string | undefined;
}

interface AddCardRes {
    /**
     * 卡券 id
     */
    cardList?: CardData[] | undefined;
}

interface CardData {
    /**
     * 加密 code，为用户领取到卡券的code加密后的字符串
     */
    code?: string | undefined;
    /**
     * 用户领取到卡券的id
     */
    cardId?: string | undefined;
    /**
     * 用户领取到卡券的扩展参数，与调用时传入的参数相同
     */
    cardExt?: string | undefined;
    /**
     * 是否成功
     */
    isSuccess?: boolean | undefined;
}

interface OpenCardOptions {
    /**
     * 需要打开的卡券列表
     */
    cardList?: OpenCardData[] | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface OpenCardData {
    /**
     * 需要打开的卡券 Id
     */
    cardId?: string | undefined;
    /**
     * 由 addCard 的返回对象中的加密 code 通过解密后得到
     */
    code?: string | undefined;
}

interface OpenSettingOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetSettingOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: ((result: AuthSetting) => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface AuthSetting {
    /**
     * 是否授权用户信息
     */
    "scope.userInfo"?: boolean | undefined;
    /**
     * 是否授权地理位置
     */
    "scope.userLocation"?: boolean | undefined;
    /**
     * 是否授权通讯地址
     */
    "scope.address"?: boolean | undefined;
    /**
     * 是否授权发票抬头
     */
    "scope.invoiceTitle"?: boolean | undefined;
    /**
     * 是否授权获取发票
     */
    "scope.invoice"?: boolean | undefined;
    /**
     * 是否授权微信运动步数
     */
    "scope.werun"?: boolean | undefined;
    /**
     * 是否授权录音功能
     */
    "scope.record"?: boolean | undefined;
    /**
     * 是否授权保存到相册
     */
    "scope.writePhotosAlbum"?: boolean | undefined;
    /**
     * 是否授权摄像头
     */
    "scope.camera"?: boolean | undefined;
}

interface GetWeRunDataOptions {
    /**
     * 超时时间，单位 ms
     */
    timeout?: number | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: GetWeRunDataRes) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface GetWeRunDataRes {
    /**
     * 调用结果
     */
    errMsg?: string | undefined;
    /**
     * 包括敏感数据在内的完整用户信息的加密数据
     */
    encryptedData?: string | undefined;
    /**
     * 加密算法的初始向量
     */
    iv?: string | undefined;
}

interface NavigateToMiniProgramOptions {
    /**
     * 要打开的uni-app appId
     */
    appId?: string | undefined;
    /**
     * 打开的页面路径，如果为空则打开首页
     */
    path?: string | undefined;
    /**
     * 需要传递给目标uni-app的数据
     */
    extraData?: any;
    /**
     * 要打开的uni-app版本
     */
    envVersion?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface NavigateBackMiniProgramOptions {
    /**
     * 需要返回给上一个uni-app的数据
     */
    extraData?: any;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface ChooseInvoiceTitleOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: ChooseInvoiceTitleRes) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface ChooseInvoiceTitleRes {
    /**
     * 抬头类型（0：单位，1：个人）
     */
    type?: string | undefined;
    /**
     * 抬头名称
     */
    title?: string | undefined;
    /**
     * 抬头税号
     */
    taxNumber?: string | undefined;
    /**
     * 单位地址
     */
    companyAddress?: string | undefined;
    /**
     * 手机号码
     */
    telephone?: string | undefined;
    /**
     * 银行名称
     */
    bankName?: string | undefined;
    /**
     * 银行账号
     */
    bankAccount?: string | undefined;
    /**
     * 接口调用结果
     */
    errMsg?: string | undefined;
}

interface CheckIsSupportSoterAuthenticationOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: CheckIsSupportSoterAuthenticationRes) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface CheckIsSupportSoterAuthenticationRes {
    /**
     * 接口调用成功的回调函数
     */
    supportMode?: any[] | undefined;
    /**
     * 接口调用结果
     */
    errMsg?: string | undefined;
}

interface StartSoterAuthenticationOptions {
    /**
     * 请求使用的可接受的生物认证方式
     */
    requestAuthModes?: any[] | undefined;
    /**
     * 挑战因子
     */
    challenge?: string | undefined;
    /**
     * 验证描述，即识别过程中显示在界面上的对话框提示内容
     */
    authContent?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: ((result: StartSoterAuthenticationRes) => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface StartSoterAuthenticationRes {
    /**
     * 错误码
     */
    errCode?: number | undefined;
    /**
     * 生物认证方式
     */
    authMode?: string | undefined;
    /**
     * 在设备安全区域（TEE）内获得的本机安全信息以及本次认证信息
     */
    resultJSON?: string | undefined;
    /**
     * 接口调用结果
     */
    errMsg?: string | undefined;
}

interface CheckIsSoterEnrolledInDeviceOptions {
    /**
     * 认证方式
     * - fingerPrint: 指纹识别
     * - facial: 人脸识别（暂未支持）
     * - speech: 声纹识别（暂未支持）
     */
    checkAuthMode?: "fingerPrint" | "facial" | "speech" | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface UpdateManager {
    /**
     * 当向应用后台请求完新版本信息，会进行回调
     */
    onCheckForUpdate(callback?: () => void): void;
    /**
     * 当新版本下载完成，会进行回调
     */
    onUpdateReady(callback?: () => void): void;
    /**
     * 当新版本下载失败，会进行回调
     */
    onUpdateFailed(callback?: () => void): void;
    /**
     * 当新版本下载完成，调用该方法会强制当前uni-app应用上新版本并重启
     */
    applyUpdate(): void;
}

interface Worker {
    /**
     * 向 Worker 线程发送的消息。
     */
    postMessage(message?: any): void;
    /**
     * 监听 Worker 线程向当前线程发送的消息
     */
    onMessage(callback?: () => void): void;
    /**
     * 结束当前 Worker 线程，仅限在主线程 Worker 实例上调用。
     */
    terminate(): void;
}

interface SetEnableDebugOptions {
    /**
     * 是否打开调试
     */
    enableDebug?: boolean | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface SetBackgroundColorOptions {
    /**
     * 窗口的背景色，必须为十六进制颜色值
     */
    backgroundColor?: string | undefined;
    /**
     * 顶部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持
     */
    backgroundColorTop?: string | undefined;
    /**
     * 底部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持
     */
    backgroundColorBottom?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface SetBackgroundTextStyleOptions {
    /**
     * 下拉背景字体、loading 图的样式，值为：dark、light
     */
    textStyle?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface OnGyroscopeChangeSuccess {
    /**
     * x 轴方向角速度
     */
    x?: number | undefined;
    /**
     * y 轴方向角速度
     */
    y?: number | undefined;
    /**
     * z 轴方向角速度
     */
    z?: number | undefined;
}

interface StartGyroscopeOptions {
    /**
     * 监听陀螺仪数据回调函数的执行频率：game（20ms/次）、ui（60ms/次）、normal （200ms/次）
     */
    interval?: string | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface StopGyroscopeOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface StopGyroscopeOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface LoadFontFaceOptions {
    /**
     * 定义的字体名称
     */
    family?: string | undefined;
    /**
     * 字体资源的地址。建议格式为 TTF 和 WOFF，WOFF2 在低版本的iOS上会不兼容。
     */
    source?: string | undefined;
    /**
     * 可选的字体描述符
     */
    desc?: LoadFontFaceOptionsDesc | undefined;
    /**
     * 接口调用成功的回调函数
     */
    success?: (() => void) | undefined;
    /**
     * 接口调用失败的回调函数
     */
    fail?: (() => void) | undefined;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (() => void) | undefined;
}

interface LoadFontFaceOptionsDesc {
    /**
     * 字体样式，可选值为 normal、italic、oblique
     */
    style?: string | undefined;
    /**
     * 字体粗细，可选值为 normal、bold、100、200../ 900
     */
    weight?: string | undefined;
    /**
     * 设置小型大写字母的字体显示文本，可选值为 normal、small-caps、inherit
     */
    variant?: string | undefined;
}
