// TO MAKE THE MAP APPEAR YOU MUST
	// ADD YOUR ACCESS TOKEN FROM
	// https://account.mapbox.com
	mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jlc2NlbmRvY2h1IiwiYSI6ImNreHcxZGQ4bjRiZ2czMXF3NGZlanUwOHUifQ.1iEERJ4M83PNKmIJ8pH1Qg';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [-122.979293823, 45.298019409],
        zoom: 13
    });

    map.on('load', () => {
        map.addSource('places', {
            'type': 'geojson',
            'data': {'type': 'FeatureCollection',
            'features': [{'type': 'Feature',
              'geometry': {'type': 'Point',
               'coordinates': [-122.929946899, 45.298862457]},
              'properties': {'global_attribute_id': 7224544,
               'street_edge_id': 1080,
               'label_type': 'CurbRamp',
               'severity': 2,
               'temporary': false,
               'img_url': 'https://firebasestorage.googleapis.com/v0/b/newberg-bb090.appspot.com/o/images%2F1080_7224544_8_CurbRamp_Sev2.0.jpg?alt=media&token=b9df7439-bf54-488d-a2f7-dd5603e32980'}},
             {'type': 'Feature',
              'geometry': {'type': 'Point',
               'coordinates': [-122.929946899, 45.299015045]},
              'properties': {'global_attribute_id': 7224545,
               'street_edge_id': 925,
               'label_type': 'CurbRamp',
               'severity': 2,
               'temporary': false,
               'img_url': 'https://firebasestorage.googleapis.com/v0/b/newberg-bb090.appspot.com/o/images%2F925_7224545_9_CurbRamp_Sev2.0.jpg?alt=media&token=ab50f0d6-b2e4-4aa5-b30c-cf4ce3abab06'}},
             {'type': 'Feature',
              'geometry': {'type': 'Point',
               'coordinates': [-122.931152344, 45.298995972]},
              'properties': {'global_attribute_id': 7224777,
               'street_edge_id': 1080,
               'label_type': 'Obstacle',
               'severity': 5,
               'temporary': true,
               'img_url': 'https://firebasestorage.googleapis.com/v0/b/newberg-bb090.appspot.com/o/images%2F1080_7224777_10_Obstacle_Sev5.0.jpg?alt=media&token=8ced995f-7957-4057-85ce-01fae6a0d405'}},
             {'type': 'Feature',
              'geometry': {'type': 'Point', 'coordinates': [-122.931282043, 45.29901123]},
              'properties': {'global_attribute_id': 7224773,
               'street_edge_id': 1080,
               'label_type': 'Obstacle',
               'severity': 5,
               'temporary': true,
               'img_url': 'https://firebasestorage.googleapis.com/v0/b/newberg-bb090.appspot.com/o/images%2F1080_7224773_11_Obstacle_Sev5.0.jpg?alt=media&token=34251dfa-01ee-45b2-9c7c-891dcedf31dc'}},
             {'type': 'Feature',
              'geometry': {'type': 'Point',
               'coordinates': [-122.932090759, 45.299007416]},
              'properties': {'global_attribute_id': 7224527,
               'street_edge_id': 1080,
               'label_type': 'CurbRamp',
               'severity': 1,
               'temporary': false,
               'img_url': 'https://firebasestorage.googleapis.com/v0/b/newberg-bb090.appspot.com/o/images%2F1080_7224527_12_CurbRamp_Sev1.0.jpg?alt=media&token=da42354b-3845-4981-ad9e-a93a2a2bace7'}},
             {'type': 'Feature',
              'geometry': {'type': 'Point', 'coordinates': [-122.93196106, 45.299079895]},
              'properties': {'global_attribute_id': 7224526,
               'street_edge_id': 1080,
               'label_type': 'CurbRamp',
               'severity': 1,
               'temporary': false,
               'img_url': 'https://firebasestorage.googleapis.com/v0/b/newberg-bb090.appspot.com/o/images%2F1080_7224526_13_CurbRamp_Sev1.0.jpg?alt=media&token=ddc42a27-b0ed-4c08-8291-9542f15be83a'}},
             {'type': 'Feature',
              'geometry': {'type': 'Point',
               'coordinates': [-122.932250977, 45.299091339]},
              'properties': {'global_attribute_id': 7224764,
               'street_edge_id': 1164,
               'label_type': 'SurfaceProblem',
               'severity': 3,
               'temporary': true,
               'img_url': 'https://firebasestorage.googleapis.com/v0/b/newberg-bb090.appspot.com/o/images%2F1164_7224764_14_SurfaceProblem_Sev3.0.jpg?alt=media&token=b5de4762-271f-480d-934f-7fcd3ec2bfe4'}},
             {'type': 'Feature',
              'geometry': {'type': 'Point',
               'coordinates': [-122.972343445, 45.320690155]},
              'properties': {'global_attribute_id': 7225805,
               'street_edge_id': 752,
               'label_type': 'CurbRamp',
               'severity': 1,
               'temporary': false,
               'img_url': 'https://firebasestorage.googleapis.com/v0/b/newberg-bb090.appspot.com/o/images%2F752_7225805_22_CurbRamp_Sev1.0.jpg?alt=media&token=c14fa9f4-e489-400a-87da-5a2f246ca2f1'}},
             {'type': 'Feature',
              'geometry': {'type': 'Point',
               'coordinates': [-122.972190857, 45.320697784]},
              'properties': {'global_attribute_id': 7225804,
               'street_edge_id': 751,
               'label_type': 'CurbRamp',
               'severity': 1,
               'temporary': false,
               'img_url': 'https://firebasestorage.googleapis.com/v0/b/newberg-bb090.appspot.com/o/images%2F751_7225804_23_CurbRamp_Sev1.0.jpg?alt=media&token=4156151c-4ce6-428c-808e-0504a6daa659'}},
             {'type': 'Feature',
              'geometry': {'type': 'Point',
               'coordinates': [-122.979293823, 45.298019409]},
              'properties': {'global_attribute_id': 7228886,
               'street_edge_id': 264,
               'label_type': 'NoCurbRamp',
               'severity': 4,
               'temporary': false,
               'img_url': 'https://firebasestorage.googleapis.com/v0/b/newberg-bb090.appspot.com/o/images%2F264_7228886_24_NoCurbRamp_Sev4.0.jpg?alt=media&token=775b3ba5-ebf4-44b1-bc0a-62183423ddb8'}}]}
        });
        // Add a layer showing the places.
        map.addLayer({
            'id': 'places',
            'type': 'circle',
            'source': 'places',
            'paint': {
                'circle-color': '#F58238',
                'circle-radius': 5,
                'circle-stroke-width': 2,
                'circle-stroke-color': '#ffffff'
            }
        });

        // Create a popup, but don't add it to the map yet.
        const popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false
        });

        map.on('mouseenter', 'places', (e) => {
            // Change the cursor style as a UI indicator.
            map.getCanvas().style.cursor = 'pointer';

            // Copy coordinates array.
            const coordinates = e.features[0].geometry.coordinates.slice();
            const label_type = e.features[0].properties.label_type;
            const url = e.features[0].properties.img_url;
            const img = "<img width = 220px src=" + url + "/>"


            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            // Populate the popup and set its coordinates
            // based on the feature found.
            popup.setLngLat(coordinates).setHTML("<strong>Label Type:</strong> " + label_type + img).addTo(map);
        });

        map.on('mouseleave', 'places', () => {
            map.getCanvas().style.cursor = '';
            popup.remove();
        });
    });