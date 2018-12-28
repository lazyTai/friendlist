export function getPosition() {
    var geolocation = new BMap.Geolocation();
    return new Promise(resolve => {
        geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                return resolve({...r.address, ...r})
                // alert('您的位置：' + r.point.lng + ',' + r.point.lat);
            }
            else {
                alert('failed' + this.getStatus());
            }
        });
    })
}