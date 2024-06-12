TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "partial": true,
  "vfov": 77.22,
  "label": "4",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_EC4E62F7_E78C_27EE_41D2_0CBFA3EB0B12_0_HS_0_0_0_map.gif",
           "height": 24,
           "width": 24
          }
         ]
        },
        "pitch": -24.52,
        "yaw": -34.12,
        "hfov": 4.56
       }
      ],
      "id": "overlay_EC529952_E785_E227_41E9_B38E2F80FEB1",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_EC4E62F7_E78C_27EE_41D2_0CBFA3EB0B12_0_HS_0_0.png",
           "height": 48,
           "width": 48
          }
         ]
        },
        "yaw": -34.12,
        "pitch": -24.52,
        "hfov": 4.56
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EC4E62F7_E78C_27EE_41D2_0CBFA3EB0B12_r_hq.jpeg",
       "height": 1096,
       "width": 1096
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EC4E62F7_E78C_27EE_41D2_0CBFA3EB0B12_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EC4E62F7_E78C_27EE_41D2_0CBFA3EB0B12_f_hq.jpeg",
       "height": 1096,
       "width": 1096
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EC4E62F7_E78C_27EE_41D2_0CBFA3EB0B12_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EC4E62F7_E78C_27EE_41D2_0CBFA3EB0B12_u_hq.jpeg",
       "height": 1096,
       "width": 1096
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EC4E62F7_E78C_27EE_41D2_0CBFA3EB0B12_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EC4E62F7_E78C_27EE_41D2_0CBFA3EB0B12_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EC4E62F7_E78C_27EE_41D2_0CBFA3EB0B12_d_hq.jpeg",
       "height": 1096,
       "width": 1096
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EC4E62F7_E78C_27EE_41D2_0CBFA3EB0B12_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EC4E62F7_E78C_27EE_41D2_0CBFA3EB0B12_l_hq.jpeg",
       "height": 1096,
       "width": 1096
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EC4E62F7_E78C_27EE_41D2_0CBFA3EB0B12_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EC4E62F7_E78C_27EE_41D2_0CBFA3EB0B12_t.jpg",
  "hfovMax": 82,
  "id": "panorama_EC4E62F7_E78C_27EE_41D2_0CBFA3EB0B12",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 120
 },
 {
  "class": "PanoramaPlayer",
  "buttonMoveUp": {
   "paddingRight": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "paddingLeft": 0,
   "shadow": false,
   "transparencyActive": false,
   "backgroundOpacity": 0,
   "iconURL": "skin/IconButton_52846DFF_5EE9_1541_4181_B129AFE01218.png",
   "verticalAlign": "middle",
   "paddingTop": 0,
   "class": "IconButton",
   "cursor": "hand",
   "minWidth": 0,
   "paddingBottom": 0,
   "rollOverIconURL": "skin/IconButton_52846DFF_5EE9_1541_4181_B129AFE01218_rollover.png",
   "width": 40,
   "id": "IconButton_52846DFF_5EE9_1541_4181_B129AFE01218",
   "pressedIconURL": "skin/IconButton_52846DFF_5EE9_1541_4181_B129AFE01218_pressed.png",
   "height": 40,
   "horizontalAlign": "center",
   "mode": "push"
  },
  "buttonMoveLeft": {
   "paddingRight": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "paddingLeft": 0,
   "shadow": false,
   "transparencyActive": false,
   "backgroundOpacity": 0,
   "iconURL": "skin/IconButton_52846DFF_5EE9_1541_41A7_DC5207170DEA.png",
   "verticalAlign": "middle",
   "paddingTop": 0,
   "class": "IconButton",
   "cursor": "hand",
   "minWidth": 0,
   "paddingBottom": 0,
   "rollOverIconURL": "skin/IconButton_52846DFF_5EE9_1541_41A7_DC5207170DEA_rollover.png",
   "width": 40,
   "id": "IconButton_52846DFF_5EE9_1541_41A7_DC5207170DEA",
   "pressedIconURL": "skin/IconButton_52846DFF_5EE9_1541_41A7_DC5207170DEA_pressed.png",
   "height": 40,
   "horizontalAlign": "center",
   "mode": "push"
  },
  "displayPlaybackBar": true,
  "buttonMoveDown": {
   "paddingRight": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "paddingLeft": 0,
   "shadow": false,
   "transparencyActive": false,
   "backgroundOpacity": 0,
   "iconURL": "skin/IconButton_52846DFF_5EE9_1541_41B6_2AFEF83ED7CA.png",
   "verticalAlign": "middle",
   "paddingTop": 0,
   "class": "IconButton",
   "cursor": "hand",
   "minWidth": 0,
   "paddingBottom": 0,
   "rollOverIconURL": "skin/IconButton_52846DFF_5EE9_1541_41B6_2AFEF83ED7CA_rollover.png",
   "width": 40,
   "id": "IconButton_52846DFF_5EE9_1541_41B6_2AFEF83ED7CA",
   "pressedIconURL": "skin/IconButton_52846DFF_5EE9_1541_41B6_2AFEF83ED7CA_pressed.png",
   "height": 40,
   "horizontalAlign": "center",
   "mode": "push"
  },
  "buttonMoveRight": {
   "paddingRight": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "paddingLeft": 0,
   "shadow": false,
   "transparencyActive": false,
   "backgroundOpacity": 0,
   "iconURL": "skin/IconButton_52846DFF_5EE9_1541_41B3_90C8BA63FF7F.png",
   "verticalAlign": "middle",
   "paddingTop": 0,
   "class": "IconButton",
   "cursor": "hand",
   "minWidth": 0,
   "paddingBottom": 0,
   "rollOverIconURL": "skin/IconButton_52846DFF_5EE9_1541_41B3_90C8BA63FF7F_rollover.png",
   "width": 40,
   "id": "IconButton_52846DFF_5EE9_1541_41B3_90C8BA63FF7F",
   "pressedIconURL": "skin/IconButton_52846DFF_5EE9_1541_41B3_90C8BA63FF7F_pressed.png",
   "height": 40,
   "horizontalAlign": "center",
   "mode": "push"
  },
  "buttonPlayRight": {
   "paddingRight": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "paddingLeft": 0,
   "shadow": false,
   "transparencyActive": false,
   "backgroundOpacity": 0,
   "iconURL": "skin/IconButton_52846DFF_5EE9_1541_41D3_1F7CF4BD8C92.png",
   "verticalAlign": "middle",
   "paddingTop": 0,
   "class": "IconButton",
   "cursor": "hand",
   "minWidth": 0,
   "paddingBottom": 0,
   "rollOverIconURL": "skin/IconButton_52846DFF_5EE9_1541_41D3_1F7CF4BD8C92_rollover.png",
   "width": 40,
   "id": "IconButton_52846DFF_5EE9_1541_41D3_1F7CF4BD8C92",
   "pressedIconURL": "skin/IconButton_52846DFF_5EE9_1541_41D3_1F7CF4BD8C92_pressed.png",
   "height": 40,
   "horizontalAlign": "center",
   "mode": "push"
  },
  "touchControlMode": "drag_rotation",
  "preloadEnabled": false,
  "buttonZoomOut": {
   "paddingRight": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "paddingLeft": 0,
   "shadow": false,
   "transparencyActive": false,
   "backgroundOpacity": 0,
   "iconURL": "skin/IconButton_52846DFF_5EE9_1541_41D3_DDEA3711A7BD.png",
   "verticalAlign": "middle",
   "paddingTop": 0,
   "class": "IconButton",
   "cursor": "hand",
   "minWidth": 0,
   "paddingBottom": 0,
   "rollOverIconURL": "skin/IconButton_52846DFF_5EE9_1541_41D3_DDEA3711A7BD_rollover.png",
   "width": 40,
   "id": "IconButton_52846DFF_5EE9_1541_41D3_DDEA3711A7BD",
   "pressedIconURL": "skin/IconButton_52846DFF_5EE9_1541_41D3_DDEA3711A7BD_pressed.png",
   "height": 40,
   "horizontalAlign": "center",
   "mode": "push"
  },
  "buttonZoomIn": {
   "paddingRight": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "paddingLeft": 0,
   "shadow": false,
   "transparencyActive": false,
   "backgroundOpacity": 0,
   "iconURL": "skin/IconButton_52846DFF_5EE9_1541_41A7_50DB45FD0BC5.png",
   "verticalAlign": "middle",
   "paddingTop": 0,
   "class": "IconButton",
   "cursor": "hand",
   "minWidth": 0,
   "paddingBottom": 0,
   "rollOverIconURL": "skin/IconButton_52846DFF_5EE9_1541_41A7_50DB45FD0BC5_rollover.png",
   "width": 40,
   "id": "IconButton_52846DFF_5EE9_1541_41A7_50DB45FD0BC5",
   "pressedIconURL": "skin/IconButton_52846DFF_5EE9_1541_41A7_50DB45FD0BC5_pressed.png",
   "height": 40,
   "horizontalAlign": "center",
   "mode": "push"
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonRestart": {
   "paddingRight": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "paddingLeft": 0,
   "shadow": false,
   "transparencyActive": false,
   "backgroundOpacity": 0,
   "iconURL": "skin/IconButton_52846DFF_5EE9_1541_419D_7441C320E2EF.png",
   "verticalAlign": "middle",
   "paddingTop": 0,
   "class": "IconButton",
   "cursor": "hand",
   "minWidth": 0,
   "paddingBottom": 0,
   "rollOverIconURL": "skin/IconButton_52846DFF_5EE9_1541_419D_7441C320E2EF_rollover.png",
   "width": 40,
   "id": "IconButton_52846DFF_5EE9_1541_419D_7441C320E2EF",
   "pressedIconURL": "skin/IconButton_52846DFF_5EE9_1541_419D_7441C320E2EF_pressed.png",
   "height": 40,
   "horizontalAlign": "center",
   "mode": "push"
  },
  "id": "MainViewerPanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "buttonPause": {
   "paddingRight": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "paddingLeft": 0,
   "shadow": false,
   "transparencyActive": false,
   "backgroundOpacity": 0,
   "iconURL": "skin/IconButton_52846DFF_5EE9_1541_41CF_08C4A49C7D60.png",
   "verticalAlign": "middle",
   "paddingTop": 0,
   "class": "IconButton",
   "cursor": "hand",
   "minWidth": 0,
   "paddingBottom": 0,
   "width": 40,
   "id": "IconButton_52846DFF_5EE9_1541_41CF_08C4A49C7D60",
   "pressedIconURL": "skin/IconButton_52846DFF_5EE9_1541_41CF_08C4A49C7D60_pressed.png",
   "height": 40,
   "horizontalAlign": "center",
   "mode": "toggle"
  },
  "buttonPlayLeft": {
   "paddingRight": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "paddingLeft": 0,
   "shadow": false,
   "transparencyActive": false,
   "backgroundOpacity": 0,
   "iconURL": "skin/IconButton_52846DFF_5EE9_1541_41D3_77F886976A1D.png",
   "verticalAlign": "middle",
   "paddingTop": 0,
   "class": "IconButton",
   "cursor": "hand",
   "minWidth": 0,
   "paddingBottom": 0,
   "rollOverIconURL": "skin/IconButton_52846DFF_5EE9_1541_41D3_77F886976A1D_rollover.png",
   "width": 40,
   "id": "IconButton_52846DFF_5EE9_1541_41D3_77F886976A1D",
   "pressedIconURL": "skin/IconButton_52846DFF_5EE9_1541_41D3_77F886976A1D_pressed.png",
   "height": 40,
   "horizontalAlign": "center",
   "mode": "push"
  },
  "viewerArea": "this.MainViewer"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 1.25,
     "easing": "cubic_in",
     "yawSpeed": 0.54,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 13.75,
     "easing": "linear",
     "yawSpeed": 0.54,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 15,
     "easing": "cubic_out",
     "yawSpeed": 0.54,
     "path": "shortest"
    }
   ]
  },
  "id": "panorama_EC4E62F7_E78C_27EE_41D2_0CBFA3EB0B12_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "partial": true,
  "vfov": 60,
  "label": "360-02_cc403a187ece87ac800d6777b69cbee9 1",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_ED0B54C1_E78C_6222_41B7_93555D54D07A_0_HS_1_0_0_map.gif",
           "height": 48,
           "width": 48
          }
         ]
        },
        "pitch": 1.74,
        "yaw": 0.31,
        "hfov": 6.4
       }
      ],
      "id": "overlay_ECAF752B_E7BB_E265_41EA_221D3D441C3F",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_ED0B54C1_E78C_6222_41B7_93555D54D07A_0_HS_1_0.png",
           "height": 96,
           "width": 96
          }
         ]
        },
        "yaw": 0.31,
        "pitch": 1.74,
        "hfov": 6.4
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_ED106B1F_E78C_665D_41DA_710648859C0A, this.camera_E6E1DC0B_E884_6225_41A7_191D937E8F44); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_ED0B54C1_E78C_6222_41B7_93555D54D07A_0_HS_0_0_0_map.gif",
           "height": 48,
           "width": 48
          }
         ]
        },
        "pitch": -0.26,
        "yaw": 58.96,
        "hfov": 6.4
       }
      ],
      "id": "overlay_ECFEE1C2_E785_E227_41E6_D4A7EB70B5E4",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_ED0B54C1_E78C_6222_41B7_93555D54D07A_0_HS_0_0.png",
           "height": 96,
           "width": 96
          }
         ]
        },
        "yaw": 58.96,
        "pitch": -0.26,
        "hfov": 6.4
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_ED1076F3_E78C_6FE5_4182_9F87FB7ED451, this.camera_E6E78C16_E884_622F_41E6_FD02979CEED8); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_ED0B54C1_E78C_6222_41B7_93555D54D07A_r_hq.jpeg",
       "height": 2576,
       "width": 2576
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_ED0B54C1_E78C_6222_41B7_93555D54D07A_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_ED0B54C1_E78C_6222_41B7_93555D54D07A_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_ED0B54C1_E78C_6222_41B7_93555D54D07A_f_hq.jpeg",
       "height": 2576,
       "width": 2576
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_ED0B54C1_E78C_6222_41B7_93555D54D07A_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_ED0B54C1_E78C_6222_41B7_93555D54D07A_l_hq.jpeg",
       "height": 2576,
       "width": 2576
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_ED0B54C1_E78C_6222_41B7_93555D54D07A_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_ED0B54C1_E78C_6222_41B7_93555D54D07A_t.jpg",
  "hfovMax": 10,
  "id": "panorama_ED0B54C1_E78C_6222_41B7_93555D54D07A",
  "hfovMin": 10,
  "pitch": 0,
  "hfov": 120
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 1.25,
     "easing": "cubic_in",
     "yawSpeed": 0.54,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 13.75,
     "easing": "linear",
     "yawSpeed": 0.54,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 15,
     "easing": "cubic_out",
     "yawSpeed": 0.54,
     "path": "shortest"
    }
   ]
  },
  "id": "panorama_ED0B54C1_E78C_6222_41B7_93555D54D07A_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "partial": true,
  "vfov": 90,
  "label": "360-03_cc403a187ece87ac800d6777b69cbee9",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_ED1076F3_E78C_6FE5_4182_9F87FB7ED451_0_HS_0_1_0_map.gif",
           "height": 4,
           "width": 1
          }
         ]
        },
        "pitch": -2.45,
        "yaw": -37.77,
        "hfov": 0.26
       }
      ],
      "id": "overlay_ECC0B040_E78C_2222_41D3_2D99CF7E3A8F",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_ED1076F3_E78C_6FE5_4182_9F87FB7ED451_0_HS_0_0.png",
           "height": 9,
           "width": 1
          }
         ]
        },
        "yaw": -37.77,
        "roll": 0,
        "pitch": -2.45,
        "hfov": 0.26
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_ED0B54C1_E78C_6222_41B7_93555D54D07A, this.camera_E71B9C55_E884_622D_41E2_79CEF0010861); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_ED1076F3_E78C_6FE5_4182_9F87FB7ED451_0_HS_1_0_0_map.gif",
           "height": 48,
           "width": 48
          }
         ]
        },
        "pitch": -2.16,
        "yaw": -41.45,
        "hfov": 6.4
       }
      ],
      "id": "overlay_EB9D675A_E785_EE27_41D2_F0BAE42F69B9",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_ED1076F3_E78C_6FE5_4182_9F87FB7ED451_0_HS_1_0.png",
           "height": 96,
           "width": 96
          }
         ]
        },
        "yaw": -41.45,
        "pitch": -2.16,
        "hfov": 6.4
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_EC1AFA68_E79C_26E2_41D0_27705F78374B, this.camera_E7105C4C_E884_6223_41E8_EB95F6B98A5A); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_ED1076F3_E78C_6FE5_4182_9F87FB7ED451_r_hq.jpeg",
       "height": 1712,
       "width": 1712
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_ED1076F3_E78C_6FE5_4182_9F87FB7ED451_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_ED1076F3_E78C_6FE5_4182_9F87FB7ED451_f_hq.jpeg",
       "height": 1712,
       "width": 1712
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_ED1076F3_E78C_6FE5_4182_9F87FB7ED451_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_ED1076F3_E78C_6FE5_4182_9F87FB7ED451_u_hq.jpeg",
       "height": 1712,
       "width": 1712
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_ED1076F3_E78C_6FE5_4182_9F87FB7ED451_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_ED1076F3_E78C_6FE5_4182_9F87FB7ED451_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_ED1076F3_E78C_6FE5_4182_9F87FB7ED451_d_hq.jpeg",
       "height": 1712,
       "width": 1712
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_ED1076F3_E78C_6FE5_4182_9F87FB7ED451_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_ED1076F3_E78C_6FE5_4182_9F87FB7ED451_l_hq.jpeg",
       "height": 1712,
       "width": 1712
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_ED1076F3_E78C_6FE5_4182_9F87FB7ED451_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_ED1076F3_E78C_6FE5_4182_9F87FB7ED451_t.jpg",
  "hfovMax": 103,
  "id": "panorama_ED1076F3_E78C_6FE5_4182_9F87FB7ED451",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 180
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -0.61,
     "easing": "cubic_in",
     "yawSpeed": 1.89,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 42.07,
     "easing": "linear",
     "yawSpeed": 1.89,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 45,
     "easing": "cubic_out",
     "yawSpeed": 1.89,
     "path": "shortest"
    }
   ]
  },
  "id": "panorama_ED1076F3_E78C_6FE5_4182_9F87FB7ED451_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -3.41,
   "yaw": -3.54
  }
 },
 {
  "class": "Panorama",
  "partial": true,
  "vfov": 45,
  "label": "exterior-midtown-360-orem-60-optimized",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_ED1018F3_E78C_63E5_41E2_608087AF373B_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_ED1018F3_E78C_63E5_41E2_608087AF373B_f_hq.jpeg",
       "height": 3432,
       "width": 3432
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_ED1018F3_E78C_63E5_41E2_608087AF373B_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_ED1018F3_E78C_63E5_41E2_608087AF373B_0_HS_0_0_0_map.gif",
           "height": 48,
           "width": 48
          }
         ]
        },
        "pitch": -16.43,
        "yaw": -6.2,
        "hfov": 3.07
       }
      ],
      "id": "overlay_EC33DAEA_E784_27E7_41E1_53BEC618E9DA",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_ED1018F3_E78C_63E5_41E2_608087AF373B_0_HS_0_0.png",
           "height": 96,
           "width": 96
          }
         ]
        },
        "yaw": -6.2,
        "pitch": -16.43,
        "hfov": 3.07
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_EC1AFA68_E79C_26E2_41D0_27705F78374B, this.camera_E70B9C43_E884_6225_41EB_C34DCE7581A8); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_ED1018F3_E78C_63E5_41E2_608087AF373B_t.jpg",
  "hfovMax": 35,
  "id": "panorama_ED1018F3_E78C_63E5_41E2_608087AF373B",
  "hfovMin": 35,
  "pitch": 0,
  "hfov": 90
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": []
  },
  "id": "panorama_ED1018F3_E78C_63E5_41E2_608087AF373B_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "partial": true,
  "vfov": 60,
  "label": "gallery_16_360_market_3012-61baf7e944f1360e36668a021b4a0fee",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_ED106B1F_E78C_665D_41DA_710648859C0A_0_HS_0_0_0_map.gif",
           "height": 48,
           "width": 48
          }
         ]
        },
        "pitch": 0.31,
        "yaw": -8.1,
        "hfov": 4.27
       }
      ],
      "id": "overlay_EC23ADFA_E784_5DE7_41D3_F0ABFECBBF99",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_ED106B1F_E78C_665D_41DA_710648859C0A_0_HS_0_0.png",
           "height": 96,
           "width": 96
          }
         ]
        },
        "yaw": -8.1,
        "pitch": 0.31,
        "hfov": 4.27
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_ED0B54C1_E78C_6222_41B7_93555D54D07A, this.camera_E6FBBC31_E884_6265_41E8_8769D7F1DE6D); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_ED106B1F_E78C_665D_41DA_710648859C0A_0_HS_1_0_0_map.gif",
           "height": 48,
           "width": 48
          }
         ]
        },
        "pitch": 0.41,
        "yaw": -44.39,
        "hfov": 4.27
       }
      ],
      "id": "overlay_EBFD51DA_E784_6227_41E3_D9A453585C20",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_ED106B1F_E78C_665D_41DA_710648859C0A_0_HS_1_0.png",
           "height": 96,
           "width": 96
          }
         ]
        },
        "yaw": -44.39,
        "pitch": 0.41,
        "hfov": 4.27
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_EB38E4B9_E7FC_E265_41DD_88A8B252C2EA, this.camera_E7007C3A_E884_6267_41EC_6F0067C04820); this.mainPlayList.set('selectedIndex', 6)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_ED106B1F_E78C_665D_41DA_710648859C0A_r_hq.jpeg",
       "height": 2576,
       "width": 2576
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_ED106B1F_E78C_665D_41DA_710648859C0A_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_ED106B1F_E78C_665D_41DA_710648859C0A_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_ED106B1F_E78C_665D_41DA_710648859C0A_f_hq.jpeg",
       "height": 2576,
       "width": 2576
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_ED106B1F_E78C_665D_41DA_710648859C0A_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_ED106B1F_E78C_665D_41DA_710648859C0A_l_hq.jpeg",
       "height": 2576,
       "width": 2576
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_ED106B1F_E78C_665D_41DA_710648859C0A_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_ED106B1F_E78C_665D_41DA_710648859C0A_t.jpg",
  "hfovMax": 90,
  "id": "panorama_ED106B1F_E78C_665D_41DA_710648859C0A",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 120
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 1.25,
     "easing": "cubic_in",
     "yawSpeed": 0.54,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 13.75,
     "easing": "linear",
     "yawSpeed": 0.54,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 15,
     "easing": "cubic_out",
     "yawSpeed": 0.54,
     "path": "shortest"
    }
   ]
  },
  "id": "panorama_ED106B1F_E78C_665D_41DA_710648859C0A_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "partial": true,
  "vfov": 80,
  "label": "hotel-lobby",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_EC1AFA68_E79C_26E2_41D0_27705F78374B_0_HS_1_0_0_map.gif",
           "height": 24,
           "width": 24
          }
         ]
        },
        "pitch": -1,
        "yaw": 26.2,
        "hfov": 4.8
       }
      ],
      "id": "overlay_EC1F2F6B_E79D_DEE5_41AC_3A6E93BD5825",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_EC1AFA68_E79C_26E2_41D0_27705F78374B_0_HS_1_0.png",
           "height": 48,
           "width": 48
          }
         ]
        },
        "yaw": 26.2,
        "pitch": -1,
        "hfov": 4.8
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_ED1076F3_E78C_6FE5_4182_9F87FB7ED451, this.camera_E6F2CC28_E884_6263_41C5_69B6348F5891); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_EC1AFA68_E79C_26E2_41D0_27705F78374B_0_HS_0_0_0_map.gif",
           "height": 24,
           "width": 24
          }
         ]
        },
        "pitch": -4.4,
        "yaw": -57,
        "hfov": 4.79
       }
      ],
      "id": "overlay_EC2DDE72_E79C_3EE7_41B2_1383145B081D",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_EC1AFA68_E79C_26E2_41D0_27705F78374B_0_HS_0_0.png",
           "height": 48,
           "width": 48
          }
         ]
        },
        "yaw": -57,
        "pitch": -4.4,
        "hfov": 4.79
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_EC1AFA68_E79C_26E2_41D0_27705F78374B_0_HS_2_0_0_map.gif",
           "height": 24,
           "width": 24
          }
         ]
        },
        "pitch": -2.2,
        "yaw": -23.6,
        "hfov": 4.8
       }
      ],
      "id": "overlay_EB3FD97B_E784_62E5_41D1_D81AC8463A43",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_EC1AFA68_E79C_26E2_41D0_27705F78374B_0_HS_2_0.png",
           "height": 48,
           "width": 48
          }
         ]
        },
        "yaw": -23.6,
        "pitch": -2.2,
        "hfov": 4.8
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_ED1018F3_E78C_63E5_41E2_608087AF373B, this.camera_E6EDDC1E_E884_625C_41D7_39AA6549D4AD); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EC1AFA68_E79C_26E2_41D0_27705F78374B_r_hq.jpeg",
       "height": 1144,
       "width": 1144
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EC1AFA68_E79C_26E2_41D0_27705F78374B_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EC1AFA68_E79C_26E2_41D0_27705F78374B_f_hq.jpeg",
       "height": 1144,
       "width": 1144
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EC1AFA68_E79C_26E2_41D0_27705F78374B_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EC1AFA68_E79C_26E2_41D0_27705F78374B_u_hq.jpeg",
       "height": 1144,
       "width": 1144
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EC1AFA68_E79C_26E2_41D0_27705F78374B_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EC1AFA68_E79C_26E2_41D0_27705F78374B_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EC1AFA68_E79C_26E2_41D0_27705F78374B_d_hq.jpeg",
       "height": 1144,
       "width": 1144
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EC1AFA68_E79C_26E2_41D0_27705F78374B_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EC1AFA68_E79C_26E2_41D0_27705F78374B_l_hq.jpeg",
       "height": 1144,
       "width": 1144
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EC1AFA68_E79C_26E2_41D0_27705F78374B_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EC1AFA68_E79C_26E2_41D0_27705F78374B_t.jpg",
  "hfovMax": 90,
  "id": "panorama_EC1AFA68_E79C_26E2_41D0_27705F78374B",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 120
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 1.25,
     "easing": "cubic_in",
     "yawSpeed": 0.54,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 13.75,
     "easing": "linear",
     "yawSpeed": 0.54,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 15,
     "easing": "cubic_out",
     "yawSpeed": 0.54,
     "path": "shortest"
    }
   ]
  },
  "id": "panorama_EC1AFA68_E79C_26E2_41D0_27705F78374B_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "partial": true,
  "vfov": 90,
  "label": "5",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_EB38E4B9_E7FC_E265_41DD_88A8B252C2EA_0_HS_0_0_0_map.gif",
           "height": 48,
           "width": 48
          }
         ]
        },
        "pitch": 25.63,
        "yaw": -6.89,
        "hfov": 4.06
       }
      ],
      "id": "overlay_EBDC7262_E78C_26E7_41E1_5C7A6DCD4787",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_EB38E4B9_E7FC_E265_41DD_88A8B252C2EA_0_HS_0_0.png",
           "height": 96,
           "width": 96
          }
         ]
        },
        "yaw": -6.89,
        "pitch": 25.63,
        "hfov": 4.06
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_ED106B1F_E78C_665D_41DA_710648859C0A, this.camera_E723FC5E_E884_62DF_41C1_8846FB1C8886); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EB38E4B9_E7FC_E265_41DD_88A8B252C2EA_r_hq.jpeg",
       "height": 2440,
       "width": 2440
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EB38E4B9_E7FC_E265_41DD_88A8B252C2EA_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EB38E4B9_E7FC_E265_41DD_88A8B252C2EA_f_hq.jpeg",
       "height": 2440,
       "width": 2440
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EB38E4B9_E7FC_E265_41DD_88A8B252C2EA_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EB38E4B9_E7FC_E265_41DD_88A8B252C2EA_u_hq.jpeg",
       "height": 2440,
       "width": 2440
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EB38E4B9_E7FC_E265_41DD_88A8B252C2EA_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_EB38E4B9_E7FC_E265_41DD_88A8B252C2EA_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EB38E4B9_E7FC_E265_41DD_88A8B252C2EA_d_hq.jpeg",
       "height": 2440,
       "width": 2440
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EB38E4B9_E7FC_E265_41DD_88A8B252C2EA_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EB38E4B9_E7FC_E265_41DD_88A8B252C2EA_l_hq.jpeg",
       "height": 2440,
       "width": 2440
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_EB38E4B9_E7FC_E265_41DD_88A8B252C2EA_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_EB38E4B9_E7FC_E265_41DD_88A8B252C2EA_t.jpg",
  "hfovMax": 90,
  "id": "panorama_EB38E4B9_E7FC_E265_41DD_88A8B252C2EA",
  "hfovMin": 60,
  "pitch": 0,
  "hfov": 120
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 1.25,
     "easing": "cubic_in",
     "yawSpeed": 0.54,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 13.75,
     "easing": "linear",
     "yawSpeed": 0.54,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 15,
     "easing": "cubic_out",
     "yawSpeed": 0.54,
     "path": "shortest"
    }
   ]
  },
  "id": "panorama_EB38E4B9_E7FC_E265_41DD_88A8B252C2EA_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EC4E62F7_E78C_27EE_41D2_0CBFA3EB0B12",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_EC4E62F7_E78C_27EE_41D2_0CBFA3EB0B12_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_ED0B54C1_E78C_6222_41B7_93555D54D07A",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_ED0B54C1_E78C_6222_41B7_93555D54D07A_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_ED1076F3_E78C_6FE5_4182_9F87FB7ED451",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_ED1076F3_E78C_6FE5_4182_9F87FB7ED451_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_ED1018F3_E78C_63E5_41E2_608087AF373B",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_ED1018F3_E78C_63E5_41E2_608087AF373B_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_ED106B1F_E78C_665D_41DA_710648859C0A",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_ED106B1F_E78C_665D_41DA_710648859C0A_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EC1AFA68_E79C_26E2_41D0_27705F78374B",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_EC1AFA68_E79C_26E2_41D0_27705F78374B_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EB38E4B9_E7FC_E265_41DD_88A8B252C2EA",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
    "camera": "this.panorama_EB38E4B9_E7FC_E265_41DD_88A8B252C2EA_camera"
   }
  ],
  "id": "mainPlayList"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 1.25,
     "easing": "cubic_in",
     "yawSpeed": 0.54,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 13.75,
     "easing": "linear",
     "yawSpeed": 0.54,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 15,
     "easing": "cubic_out",
     "yawSpeed": 0.54,
     "path": "shortest"
    }
   ]
  },
  "id": "camera_E6E1DC0B_E884_6225_41A7_191D937E8F44",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 171.9
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -0.61,
     "easing": "cubic_in",
     "yawSpeed": 1.89,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 42.07,
     "easing": "linear",
     "yawSpeed": 1.89,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 45,
     "easing": "cubic_out",
     "yawSpeed": 1.89,
     "path": "shortest"
    }
   ]
  },
  "id": "camera_E6E78C16_E884_622F_41E6_FD02979CEED8",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 142.23
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": []
  },
  "id": "camera_E6EDDC1E_E884_625C_41D7_39AA6549D4AD",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 173.8
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -0.61,
     "easing": "cubic_in",
     "yawSpeed": 1.89,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 42.07,
     "easing": "linear",
     "yawSpeed": 1.89,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 45,
     "easing": "cubic_out",
     "yawSpeed": 1.89,
     "path": "shortest"
    }
   ]
  },
  "id": "camera_E6F2CC28_E884_6263_41C5_69B6348F5891",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 138.55
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 1.25,
     "easing": "cubic_in",
     "yawSpeed": 0.54,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 13.75,
     "easing": "linear",
     "yawSpeed": 0.54,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 15,
     "easing": "cubic_out",
     "yawSpeed": 0.54,
     "path": "shortest"
    }
   ]
  },
  "id": "camera_E6FBBC31_E884_6265_41E8_8769D7F1DE6D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -179.69
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 1.25,
     "easing": "cubic_in",
     "yawSpeed": 0.54,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 13.75,
     "easing": "linear",
     "yawSpeed": 0.54,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 15,
     "easing": "cubic_out",
     "yawSpeed": 0.54,
     "path": "shortest"
    }
   ]
  },
  "id": "camera_E7007C3A_E884_6267_41EC_6F0067C04820",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 173.11
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 1.25,
     "easing": "cubic_in",
     "yawSpeed": 0.54,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 13.75,
     "easing": "linear",
     "yawSpeed": 0.54,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 15,
     "easing": "cubic_out",
     "yawSpeed": 0.54,
     "path": "shortest"
    }
   ]
  },
  "id": "camera_E70B9C43_E884_6225_41EB_C34DCE7581A8",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 156.4
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 1.25,
     "easing": "cubic_in",
     "yawSpeed": 0.54,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 13.75,
     "easing": "linear",
     "yawSpeed": 0.54,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 15,
     "easing": "cubic_out",
     "yawSpeed": 0.54,
     "path": "shortest"
    }
   ]
  },
  "id": "camera_E7105C4C_E884_6223_41E8_EB95F6B98A5A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -153.8
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 1.25,
     "easing": "cubic_in",
     "yawSpeed": 0.54,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 13.75,
     "easing": "linear",
     "yawSpeed": 0.54,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 15,
     "easing": "cubic_out",
     "yawSpeed": 0.54,
     "path": "shortest"
    }
   ]
  },
  "id": "camera_E71B9C55_E884_622D_41E2_79CEF0010861",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -121.04
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 1.25,
     "easing": "cubic_in",
     "yawSpeed": 0.54,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 13.75,
     "easing": "linear",
     "yawSpeed": 0.54,
     "path": "shortest"
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 15,
     "easing": "cubic_out",
     "yawSpeed": 0.54,
     "path": "shortest"
    }
   ]
  },
  "id": "camera_E723FC5E_E884_62DF_41C1_8846FB1C8886",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 135.61
  }
 }
], "children": [
 {
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowColor": "#000000",
  "top": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingTop": 4,
  "playbackBarHeadBorderRadius": 0,
  "progressLeft": 10,
  "toolTipBorderRadius": 3,
  "playbackBarProgressOpacity": 1,
  "paddingLeft": 0,
  "shadow": false,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBorderSize": 2,
  "playbackBarLeft": 0,
  "playbackBarHeadHeight": 30,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "toolTipShadowOpacity": 1,
  "toolTipShadowBlurRadius": 3,
  "toolTipFontSize": 12,
  "toolTipPaddingRight": 6,
  "toolTipShadowColor": "#333333",
  "progressBarBorderColor": "#000000",
  "playbackBarHeadBorderSize": 0,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "minWidth": 100,
  "paddingBottom": 0,
  "toolTipBorderColor": "#767676",
  "toolTipPaddingLeft": 6,
  "progressBarBackgroundColorDirection": "vertical",
  "progressRight": 10,
  "height": "100%",
  "playbackBarHeadOpacity": 1,
  "playbackBarBottom": 10,
  "progressBackgroundColorDirection": "vertical",
  "progressOpacity": 1,
  "minHeight": 50,
  "toolTipFontWeight": "normal",
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadShadow": true,
  "playbackBarOpacity": 1,
  "paddingRight": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipBorderSize": 1,
  "progressBarOpacity": 1,
  "progressBorderColor": "#AAAAAA",
  "progressBackgroundOpacity": 1,
  "progressBottom": 1,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressHeight": 20,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
  "toolTipBackgroundColor": "#F6F6F6",
  "id": "MainViewer",
  "borderRadius": 0,
  "progressBorderSize": 2,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeight": 20,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "width": "100%",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipShadowSpread": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarHeadWidth": 6,
  "progressBorderRadius": 4,
  "playbackBarProgressBorderSize": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "borderSize": 0,
  "paddingTop": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipFontColor": "#606060",
  "progressBarBorderRadius": 4,
  "progressBarBorderSize": 0,
  "class": "ViewerArea",
  "playbackBarProgressBorderRadius": 0,
  "left": 0,
  "playbackBarBorderColor": "#AAAAAA",
  "toolTipOpacity": 1,
  "transitionMode": "blending",
  "toolTipFontStyle": "normal",
  "toolTipFontFamily": "Arial",
  "playbackBarBorderRadius": 4
 },
 {
  "scrollBarWidth": 10,
  "paddingRight": 0,
  "children": [
   {
    "scrollBarWidth": 10,
    "paddingRight": 0,
    "gap": 4,
    "children": [
     "this.IconButton_52846DFF_5EE9_1541_41D3_DDEA3711A7BD",
     "this.IconButton_52846DFF_5EE9_1541_419D_7441C320E2EF",
     "this.IconButton_52846DFF_5EE9_1541_41D3_77F886976A1D",
     "this.IconButton_52846DFF_5EE9_1541_41A7_DC5207170DEA",
     {
      "scrollBarWidth": 10,
      "paddingRight": 0,
      "gap": 4,
      "children": [
       "this.IconButton_52846DFF_5EE9_1541_4181_B129AFE01218",
       "this.IconButton_52846DFF_5EE9_1541_41CF_08C4A49C7D60",
       "this.IconButton_52846DFF_5EE9_1541_41B6_2AFEF83ED7CA"
      ],
      "contentOpaque": false,
      "borderRadius": 0,
      "paddingLeft": 0,
      "shadow": false,
      "scrollBarVisible": "rollOver",
      "backgroundOpacity": 0,
      "verticalAlign": "middle",
      "paddingTop": 0,
      "overflow": "hidden",
      "class": "Container",
      "scrollBarMargin": 2,
      "borderSize": 0,
      "minWidth": 20,
      "paddingBottom": 0,
      "width": 40,
      "scrollBarColor": "#000000",
      "id": "Container_52846DFF_5EE9_1541_41D6_8F43EB3E61A3",
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "horizontalAlign": "center",
      "minHeight": 20,
      "layout": "vertical"
     },
     "this.IconButton_52846DFF_5EE9_1541_41B3_90C8BA63FF7F",
     "this.IconButton_52846DFF_5EE9_1541_41D3_1F7CF4BD8C92",
     {
      "paddingRight": 0,
      "minHeight": 0,
      "borderRadius": 0,
      "borderSize": 0,
      "paddingLeft": 0,
      "shadow": false,
      "transparencyActive": false,
      "backgroundOpacity": 0,
      "iconURL": "skin/IconButton_52846DFF_5EE9_1541_41AE_A46BAA9A6916.png",
      "verticalAlign": "middle",
      "paddingTop": 0,
      "class": "IconButton",
      "cursor": "hand",
      "minWidth": 0,
      "paddingBottom": 0,
      "width": 40,
      "id": "IconButton_52846DFF_5EE9_1541_41AE_A46BAA9A6916",
      "pressedIconURL": "skin/IconButton_52846DFF_5EE9_1541_41AE_A46BAA9A6916_pressed.png",
      "height": 40,
      "horizontalAlign": "center",
      "mode": "toggle"
     },
     "this.IconButton_52846DFF_5EE9_1541_41A7_50DB45FD0BC5"
    ],
    "contentOpaque": false,
    "borderRadius": 0,
    "paddingLeft": 0,
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "backgroundOpacity": 0,
    "verticalAlign": "middle",
    "paddingTop": 0,
    "overflow": "hidden",
    "class": "Container",
    "scrollBarMargin": 2,
    "borderSize": 0,
    "minWidth": 392,
    "paddingBottom": 0,
    "scrollBarColor": "#000000",
    "id": "Container_52846DFF_5EE9_1541_41C9_642ADAAC6926",
    "scrollBarOpacity": 0.5,
    "height": "100%",
    "horizontalAlign": "center",
    "minHeight": 20,
    "layout": "horizontal"
   }
  ],
  "bottom": "0%",
  "contentOpaque": false,
  "borderRadius": 0,
  "paddingLeft": 0,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundOpacity": 0,
  "verticalAlign": "middle",
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "left": "0%",
  "overflow": "scroll",
  "class": "Container",
  "scrollBarMargin": 2,
  "minWidth": 1,
  "paddingBottom": 0,
  "borderSize": 0,
  "scrollBarColor": "#000000",
  "gap": 1,
  "width": "100%",
  "height": 185,
  "horizontalAlign": "center",
  "minHeight": 1,
  "layout": "horizontal"
 }
], 
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "contentOpaque": false,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_52846DFF_5EE9_1541_41AE_A46BAA9A6916",
 "paddingLeft": 0,
 "shadow": false,
 "scripts": {
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "getKey": function(key){    return window[key]; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "existsKey": function(key){    return key in window; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "registerKey": function(key, value){    window[key] = value; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "unregisterKey": function(key){    delete window[key]; },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); }
 },
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "paddingTop": 0,
 "mouseWheelEnabled": true,
 "overflow": "visible",
 "class": "Player",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "minWidth": 20,
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "backgroundPreloadEnabled": true,
 "height": "100%",
 "horizontalAlign": "left",
 "id": "rootPlayer",
 "minHeight": 20,
 "layout": "absolute"
})