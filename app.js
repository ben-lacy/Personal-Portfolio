


// PARTICLE JS BACKGROUND
var options = {
    "particles":{
        "number":{
            "value":100,
            "density":{
                "enable":true,
                "value_area":400
            }
        },
        "color":{
            "value":"#ffffff"
        },
        "shape":{
            "type":"circle"
        },
        "opacity":{
            "value":1,
            "random":true
        },
        "size":{
            "value":2,
            "random":true,
            "anim":{
                "enable":false,
                "speed":20,
                "size_min":0.1,
                "sync":false
            }
        },
        "line_linked":{
            "enable":false,
            "distance":50,
            "color":"#ffffff",
            "opacity":0.4,
            "width":1
        },
        "move":{
            "enable":true,
            "speed":1,
            "direction":"none",
            "random":true,
            "straight":false,
            "out_mode":"out",
            "bounce":false
        }
    },
    "interactivity":{
        "detect_on":"canvas",
        "events":{
            "onhover":{
                "enable":false
            },"onclick":{
                "enable":false
            },"resize":true
        }
    },
    "retina_detect":false
};

particlesJS("particle", options);