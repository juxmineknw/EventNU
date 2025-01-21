mapboxgl.accessToken = 'pk.eyJ1Ijoic3VyaXlhNjM2IiwiYSI6ImNtNjY5cGdoajF2eW0ya29oZzdkOGxianUifQ.3iwzBRxARwIFfIMRiF827Q';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [100.19205585817829, 16.748163231872958], // ตำแหน่งเริ่มต้น
    zoom: 18, // ซูมเริ่มต้น
    minZoom: 18, // ล็อคระดับซูม
    maxZoom: 18, // ล็อคระดับซูม
    maxBounds: [
        [100.19205585817829, 16.748163231872958], // ล็อคตำแหน่งซ้ายล่าง
        [100.19205585817829, 16.748163231872958]  // ล็อคตำแหน่งขวาบน
    ],
    interactive: false // ปิดการโต้ตอบทั้งหมด
});

map.on('load', () => {
    map.addSource('places', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'description': `
                    <div>
                        <img src="assets/imgs/chrismas.jpeg" alt="" class="popup-image">
                        <strong>Event อาคารสำนักงานอธิการบดี มหาวิทยาลัยนเรศวร</strong>
                        <p>ทำบุญตักบาตรข้าวสารอาหารแห้งถวายแด่พระภิกษุสงฆ์และสามเณร วันปีใหม่</p>
                    </div>`
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [100.19205585817829,16.748163231872958]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': `
                    <div>
                        <img src="assets/imgs/chrismas.jpeg" alt="" class="popup-image">
                        <strong>อาคารสำนักงานอธิการบดี มหาวิทยาลัยนเรศวร</strong>
                        <p>โรงทานงานกฐิน </p>
                    </div>`
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [100.19247621454512, 16.74840054584726]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': `
                    <div>
                        <img src="assets/imgs/chrismas.jpeg" alt="" class="popup-image">
                        <strong>อาคารสำนักงานอธิการบดี มหาวิทยาลัยนเรศวร</strong>
                        <p>ซุ้มกิจกรรมงานวัด</p>
                    </div>`
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [100.19234891809974, 16.74811012329117]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': `
                    <div>
                        <img src="assets/imgs/chrismas.jpeg" alt="" class="popup-image">
                        <strong>อาคารสำนักงานอธิการบดี มหาวิทยาลัยนเรศวร</strong>
                        <p>ร้านขายลูกชิ้นสุดหล่อ</p>
                    </div>`
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [100.19218530335448, 16.748423471735137]
                    }
                }
            ]
        }
    });

    map.addLayer({
        'id': 'places',
        'type': 'circle',
        'source': 'places',
        'paint': {
            'circle-color': '#4264fb',
            'circle-radius': 6,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff'
        }
    });

    const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    map.on('mouseenter', 'places', (e) => {
        map.getCanvas().style.cursor = 'pointer';

        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        if (['mercator', 'equirectangular'].includes(map.getProjection().name)) {
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }
        }

        popup.setLngLat(coordinates).setHTML(description).addTo(map);
    });

    map.on('mouseleave', 'places', () => {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
});
