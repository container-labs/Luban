import {
    CNC_TOOL_SNAP_FLAT_END_MILL,
    CNC_TOOL_SNAP_V_BIT,
    CNC_TOOL_SNAP_S_F_S,
    CNC_MESH_SLICE_MODE_LINKAGE
} from '../../constants';

export const CaseConfigOriginal = [
    {
        tag: '3dp', // 3dp、laser、cnc
        title: '3D Printed Fabric',
        imgSrc: '../../images/user-case/Origin/3D-Origin.jpg',
        pathConfig: {
            name: '3DP_test_Origin.stl',
            casePath: './Origin/'
        },
        material: {
            definitionName: 'Caselibrary.Vase.Ori.material', // pla,stl
            definitionId: 'material.VaseOri', // pla,stl
            // material_diameter: 1.75,
            // material_flow: 100,
            material_print_temperature: 205,
            material_print_temperature_layer_0: 205,
            material_final_print_temperature: 200,
            material_bed_temperature: 50,
            material_bed_temperature_layer_0: 70
        },
        quality: {
            isRecommand: true,
            definitionName: 'quality.normal_quality',
            definitionId: 'quality.normal_quality'
            // layer_height: 0.16,
            //
            // layer_height: 0.16,
            // speed_wall_0: 40,
            // layer_height_0: 0.25,
            // magic_spiralize: true
        }
    },
    {
        tag: 'laser',
        title: 'Laser Engraved Feather',
        mode: 'greyscale', // mode: 'vector','greyscale','bw','text','trace'
        imgSrc: '../../images/user-case/Origin/Laser-Origin.jpg',
        pathConfig: {
            name: 'Laser_test_Origin.jpg',
            casePath: './Origin/'
        },
        materials: {
            isRotate: false
        },
        caseConfigs: {
            config: {
                // greyscale: {
                // algorithm: 'FloydSteinburg',
                // brightness: 50,
                // bwThreshold: 168,
                // contrast: 50,
                // density: 4,
                // invert: false,
                // movementMode: 'greyscale-line',
                // whiteClip: 100

                // // bw: {
                // invert: 1,
                // bwThreshold: 1,
                // direction: 1,
                // density: 1,

                // // RasterVector: {
                // vectorThreshold: 1,
                // turdSize: 1,
                // invert: 1,
                // fillEnabled: true, // bool
                // fillDensity: 10, // 0~20
                // isOptimizePath: false // bool

                // text: {
                // pathType: 'outline', // "outline"、 "pocket"
                // safetyHeight: 0.2,
                // stepDown: 0.2,
                // stopHeight: 10,
                // tabHeight: -0.5,
                // tabSpace: 24,
                // tabWidth: 2,
                // enableTab: false,
                // targetDepth: 2,
                //
                // text: 'jt tj ss',
                // size: 30,
                // font: 'Georgia',
                // lineHeight: 1.5,
                // alignment: 'left',
                // fillEnabled: true, // bool
                // fillDensity: 10, // 0~20
                // isOptimizePath: false // bool

            },
            gcodeConfig: {
                jogSpeed: 500,
                workSpeed: 2000,
                dwellTime: 32,
                // multiPassEnabled: true,
                // multiPassDepth: 0.6, // 2+
                // multiPasses: 2, // 0+
                fixedPowerEnabled: true, // bool
                fixedPower: 100 // 0~100
            }
        },
        caseTransformation: {
            // text
            width: 57.6,
            height: 100,
            positionX: 0,
            positionY: 0,
            rotationZ: 0, // 90 / 180 * Math.PI
            flip: 0
        }
    },
    {
        tag: 'cnc',
        title: 'CNC Cut Sign',
        mode: 'vector', // mode: 'vector','greyscale','bw','text','trace'
        imgSrc: '../../images/user-case/Origin/CNC-Origin.jpg',
        pathConfig: {
            name: 'CNC_test_Origin.svg',
            casePath: './Origin/'
        },
        materials: {
            isRotate: false
        },
        caseConfigs: {
            tool: CNC_TOOL_SNAP_V_BIT,
            config: {
            },
            gcodeConfig: {
                // toolDiameter: 3.175,
                toolAngle: 180,
                targetDepth: 1,
                stepDown: 0.5,
                // safetyHeight: 5,
                // stopHeight: 10,
                jogSpeed: 3000,
                plungeSpeed: 100,
                workSpeed: 200
            }
        },
        caseTransformation: {
            // text
            // positionX: 1,
            // positionY: 2,
            // rotationZ: 90 / 180 * Math.PI,
            // flip: 1
        }
    }
];

export const CaseConfig150 = [
    {
        tag: '3dp', // 3dp、laser、cnc
        title: '3D Printed Spiral Vase',
        imgSrc: '../../images/user-case/A150/3D-A150.png',
        pathConfig: {
            name: '3DP_test_A150.stl.zip',
            casePath: './A150/'
        },
        material: {
            definitionName: 'Caselibrary.Vase.A150.material', // pla,stl
            definitionId: 'material.VaseA150', // pla,stl
            // material_diameter: 1.75,
            // material_flow: 100,
            // material_print_temperature: 198,
            // material_print_temperature_layer_0: 200,
            // material_final_print_temperature: 198,
            material_bed_temperature_layer_0: 50
        },
        quality: {
            isRecommand: false,
            definitionName: 'Caselibrary.Vase.A150.quality',
            definitionId: 'quality.VaseA150',
            layer_height: 0.16,

            // layer_height: 0.16,
            speed_wall_0: 40,
            layer_height_0: 0.25,
            magic_spiralize: true
        }
    },
    {
        tag: 'laser',
        title: 'Laser Cut Gift Box',
        mode: 'vector', // mode: 'vector','greyscale','bw','text','trace'
        imgSrc: '../../images/user-case/A150/Laser-A150.png',
        pathConfig: {
            name: 'Laser_test_A150.svg',
            casePath: './A150'
        },
        materials: {
            isRotate: false
        },
        caseConfigs: {
            config: {
                // greyscale: {
                // algorithm: 'FloydSteinburg',
                // brightness: 50,
                // bwThreshold: 168,
                // contrast: 50,
                // density: 4,
                // invert: false,
                // movementMode: 'greyscale-line',
                // whiteClip: 100

                // // bw: {
                // invert: 1,
                // bwThreshold: 1,
                // direction: 1,
                // density: 1,

                // // RasterVector: {
                // vectorThreshold: 1,
                // turdSize: 1,
                // invert: 1,
                // fillEnabled: true, // bool
                // fillDensity: 10, // 0~20
                // isOptimizePath: false // bool

                // text: {
                // pathType: 'outline', // "outline"、 "pocket"
                // safetyHeight: 0.2,
                // stepDown: 0.2,
                // stopHeight: 10,
                // tabHeight: -0.5,
                // tabSpace: 24,
                // tabWidth: 2,
                // enableTab: false,
                // targetDepth: 2,
                //
                // text: 'jt tj ss',
                // size: 30,
                // font: 'Georgia',
                // lineHeight: 1.5,
                // alignment: 'left',
                // fillEnabled: true, // bool
                // fillDensity: 10, // 0~20
                // isOptimizePath: false // bool

            },
            gcodeConfig: {
                jogSpeed: 3000,
                workSpeed: 140,
                multiPassEnabled: true,
                multiPassDepth: 0.6, // 2+
                multiPasses: 2, // 0+
                fixedPowerEnabled: true, // bool
                fixedPower: 100 // 0~100
            }
        },
        caseTransformation: {
            // text
            positionX: 0,
            positionY: 0,
            rotationZ: 0, // 90 / 180 * Math.PI
            flip: 0
        }
    },
    {
        tag: 'cnc',
        title: 'CNC Cut Keychain',
        mode: 'vector', // mode: 'vector','greyscale','bw','text','trace'
        imgSrc: '../../images/user-case/A150/CNC-A150.png',
        pathConfig: {
            name: 'CNC_test_A150.svg',
            casePath: './A150/'
        },
        materials: {
            isRotate: false
        },
        caseConfigs: {
            config: {
            },
            gcodeConfig: {
                toolSnap: CNC_TOOL_SNAP_FLAT_END_MILL,
                toolDiameter: 3.175,
                toolAngle: 180,
                targetDepth: 3.2,
                stepDown: 0.4,
                safetyHeight: 5,
                stopHeight: 10,
                jogSpeed: 3000,
                plungeSpeed: 300,
                workSpeed: 300
            }
        },
        caseTransformation: {
            // text
            // positionX: 1,
            // positionY: 2,
            // rotationZ: 90 / 180 * Math.PI,
            // flip: 1
        }
    }
];

export const CaseConfig250 = [
    {
        tag: '3dp', // 3dp、laser、cnc
        title: '3D Printed Spiral Vase',
        imgSrc: '../../images/user-case/A250/3D-A250&A350.png',
        pathConfig: {
            name: '3DP_test_A250.stl.zip',
            casePath: './A250/'
        },
        material: {
            // pla,stl
            definitionName: 'Caselibrary.Vase.A250.material',
            definitionId: 'material.VaseA250',
            material_bed_temperature_layer_0: 50
        },
        quality: {
            isRecommand: false,
            definitionName: 'Caselibrary.Vase.A250.quality',
            definitionId: 'quality.VaseA250',
            layer_height: 0.16,
            layer_height_0: 0.25,
            speed_wall_0: 40,
            magic_spiralize: true
        }
    },
    {
        tag: 'laser',
        title: 'Laser Cut Gift Box',
        // sourceType: 'svg', // raster/svg/text
        mode: 'vector', // mode: 'vector','greyscale','bw','text','trace'
        imgSrc: '../../images/user-case/A250/Laser-A250&A350.png',
        pathConfig: {
            name: 'Laser_test_A250.svg',
            casePath: './A250'
        },
        materials: {
            isRotate: false
        },
        caseConfigs: {
            config: {
            },
            gcodeConfig: {
                jogSpeed: 3000,
                workSpeed: 140,
                multiPassEnabled: true,
                multiPassDepth: 0.6, // 2+
                multiPasses: 2, // 0+
                fixedPowerEnabled: true, // bool
                fixedPower: 100 // 0~100
            }
        },
        caseTransformation: {
            // text
            positionX: 0,
            positionY: 0,
            rotationZ: 0, // 90 / 180 * Math.PI
            flip: 0
        }
    },
    {
        tag: 'cnc',
        title: 'CNC Cut Smartphone Holder',
        mode: 'vector', // mode: 'vector','greyscale','bw','text','trace'
        imgSrc: '../../images/user-case/A250/CNC-A250&A350.png',
        pathConfig: {
            name: 'CNC_test_A250.svg',
            casePath: './A250/'
        },
        materials: {
            isRotate: false
        },
        caseConfigs: {
            config: {
            },
            gcodeConfig: {
                toolSnap: CNC_TOOL_SNAP_FLAT_END_MILL,
                toolDiameter: 3.175,
                toolAngle: 180,
                targetDepth: 3.2,
                stepDown: 0.4,
                safetyHeight: 5,
                stopHeight: 10,
                jogSpeed: 3000,
                plungeSpeed: 400,
                workSpeed: 400
            }
        },
        caseTransformation: {
        }
    }
];

export const CaseConfig350 = [
    {
        tag: '3dp', // 3dp、laser、cnc
        title: '3D Printed Spiral Vase',
        imgSrc: '../../images/user-case/A250/3D-A250&A350.png',
        pathConfig: {
            name: '3DP_test_A350.stl.zip',
            casePath: './A350/'
        },
        material: {
            definitionName: 'Caselibrary.Vase.A350.material',
            definitionId: 'material.VaseA350',
            material_bed_temperature_layer_0: 50
        },
        quality: {
            isRecommand: false,
            definitionName: 'Caselibrary.Vase.A350.quality',
            definitionId: 'quality.VaseA350',
            layer_height: 0.16,
            speed_wall_0: 40,
            layer_height_0: 0.25,
            magic_spiralize: true
        }
    },
    {
        tag: 'laser',
        title: 'Laser Cut Gift Box',
        // sourceType: 'svg', // raster/svg/text
        mode: 'vector', // mode: 'vector','greyscale','bw','text','trace'
        imgSrc: '../../images/user-case/A250/Laser-A250&A350.png',
        pathConfig: {
            name: 'Laser_test_A350.svg',
            casePath: './A350'
        },
        materials: {
            isRotate: false
        },
        caseConfigs: {
            config: {

            },
            gcodeConfig: {
                jogSpeed: 3000,
                workSpeed: 140,
                multiPassEnabled: true,
                multiPassDepth: 0.6, // 2+
                multiPasses: 2, // 0+
                fixedPowerEnabled: true, // bool
                fixedPower: 100 // 0~100
            }
        },
        caseTransformation: {
            positionX: 0,
            positionY: 0,
            rotationZ: 0, // 90 / 180 * Math.PI
            flip: 0
        }
    },
    {
        tag: 'cnc',
        title: 'CNC Cut Smartphone Holder',
        mode: 'vector', // mode: 'vector','greyscale','bw','text','trace'
        imgSrc: '../../images/user-case/A250/CNC-A250&A350.png',
        pathConfig: {
            name: 'CNC_test_A350.svg',
            casePath: './A350/'
        },
        materials: {
            isRotate: false
        },
        caseConfigs: {
            config: {

            },
            gcodeConfig: {
                toolSnap: CNC_TOOL_SNAP_FLAT_END_MILL,
                toolDiameter: 3.175,
                toolAngle: 180,
                targetDepth: 3.2,
                stepDown: 0.4,
                safetyHeight: 5,
                stopHeight: 10,
                jogSpeed: 3000,
                plungeSpeed: 400,
                workSpeed: 400
            }
        },
        caseTransformation: {
        }
    }
];

export const CaseConfigFourAxis = [
    {
        tag: 'laser',
        title: 'Rotary Laser Engraved Lion',
        materials: {
            diameter: 40,
            fixtureLength: 20,
            isRotate: true,
            length: 75
        },
        // sourceType: 'svg', // raster/svg/text
        mode: 'greyscale', // mode: 'vector','greyscale','bw','text','trace'
        imgSrc: '../../images/user-case/FourAxis/4th-Laser-A250&A350.png',
        pathConfig: {
            name: 'Laser_test_4th.jpg',
            casePath: './FourAxis'
        },
        caseConfigs: {
            config: {
                density: 7
                // movementMode: 'greyscale-line',
            },
            gcodeConfig: {
                jogSpeed: 1500,
                workSpeed: 2500,
                // multiPassEnabled: true,
                // multiPassDepth: 0.6, // 2+
                // multiPasses: 2, // 0+
                fixedPowerEnabled: true, // bool
                fixedPower: 28 // 0~100
            }
        },
        caseTransformation: {
            positionX: 0,
            positionY: 27.4,
            rotationZ: 0, // 90 / 180 * Math.PI
            width: 42,
            height: 54.8,
            flip: 0
        }
    },
    {
        tag: 'cnc',
        title: 'Rotary CNC Carved Chess Piece',
        mode: 'greyscale', // mode: 'vector','greyscale','bw','text','trace'
        materials: {
            isRotate: true,
            diameter: 35,
            fixtureLength: 20,
            length: 70
        },
        imgSrc: '../../images/user-case/FourAxis/4th-CNC-A250&A350.png',
        pathConfig: {
            // for stl in cnc
            isRotate: true,
            name: 'CNC_test_4th.stl.zip',
            casePath: './FourAxis/'
        },
        caseConfigs: {
            config: {

            },
            gcodeConfig: {
                toolSnap: CNC_TOOL_SNAP_S_F_S,
                stepDown: 17.5,
                safetyHeight: 1,
                stopHeight: 10,
                jogSpeed: 1500
                // plungeSpeed: 400,
                // workSpeed: 400
            }
        },
        caseTransformation: {
            positionX: 0,
            positionY: 25,
            rotationZ: 0,
            width: 110,
            height: 50
        }
    },

    {
        tag: 'cnc',
        title: '4-axis Linkage CNC Carved Lion',
        mode: 'greyscale', // mode: 'vector','greyscale','bw','text','trace'
        materials: {
            isRotate: true,
            diameter: 35,
            fixtureLength: 20,
            length: 70
        },
        imgSrc: '../../images/user-case/FourAxis/4th-CNC-Gcode-A250&A350.png',
        pathConfig: {
            // for stl in cnc
            isRotate: true,
            name: 'CNC_test_4th_lion.stl.zip',
            casePath: './FourAxis/'
        },
        caseConfigs: {
            config: {

            },
            gcodeConfig: {
                toolSnap: CNC_TOOL_SNAP_S_F_S,
                sliceMode: CNC_MESH_SLICE_MODE_LINKAGE,
                stepDown: 17.5,
                safetyHeight: 1,
                stopHeight: 10,
                jogSpeed: 1500
                // plungeSpeed: 400,
                // workSpeed: 400
            }
        },
        caseTransformation: {
            positionX: 0,
            positionY: 25,
            rotationZ: 0,
            width: 110,
            height: 50
        }
    }
];
