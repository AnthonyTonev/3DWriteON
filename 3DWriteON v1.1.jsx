﻿{
    function ScriptBody(thisObj) {
        var scriptName = "3DWriteON";
        var dropNum = 0;


        var nullObject, solidLayer;


        function dropNumGen() {
            var dropList = my_palette.grp.shapes.dropDown.items;
            for (var i = 0; i <= dropList.length; i++) {
                if (dropList[i].selected == true) {
                    dropNum = i;
                    return dropNum;
                }
            }
        }

        function operNumGen() {
            var dropList = my_palette.grp.tools.operations.items;
            for (var i = 0; i <= dropList.length; i++) {
                if (dropList[i].selected == true) {
                    dropNum = i;
                    return dropNum;
                }
            }
        }

        var wInc = 150;
        var hInc = 150;
        var dInc = 150;

        var birthrate = 50;
        var longevity = 100;
        
        function argsX_Input_changed() {
            wInc = parseFloat(this.text) || 150;
        }

        function argsY_Input_changed() {
            hInc = parseFloat(this.text) || 150;
        }

        function argsZ_Input_changed() {
            dInc = parseFloat(this.text) || 150;
        }


          function birthRateSet() {
            birthrate = parseFloat(this.text) || 50;
        }


        function lifeSpanSet() {
            longevity = parseFloat(this.text) || 100;
        }

      

        function addObject() {


            if ((app.project.activeItem === undefined) || !(app.project.activeItem instanceof CompItem)) {
                alert("Select or open a comp first.", scriptName);
                return;
            }
            var activeItem = app.project.activeItem;



            app.beginUndoGroup("add object");
            var item = dropNumGen();

            var comp = {
                width: activeItem.width,
                height: activeItem.height,
                duration: activeItem.duration
            }
            var cx = comp.width / 2;
            var cy = comp.height / 2;
            if (item === 0) {
                add_Null_Pen();

                var keyData = {
                    time: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                    pos: [
                        [cx, cy, 0],
                        [cx + wInc, cy, 0],
                        [cx + wInc, cy + hInc, 0],
                        [cx, cy + hInc, 0],
                        [cx, cy, 0],
                        [cx, cy, dInc],
                        [cx + wInc, cy, dInc],
                        [cx + wInc, cy + hInc, dInc],
                        [cx, cy + hInc, dInc],
                        [cx, cy, dInc],
                        [cx + wInc, cy, dInc],
                        [cx + wInc, cy, 0],
                        [cx + wInc, cy + hInc, 0],
                        [cx + wInc, cy + hInc, dInc],
                        [cx, cy + hInc, dInc],
                        [cx, cy + hInc, 0]
                    ]
                }
                var nullPosition = nullObject.property("Position");

                for (var t = 0; t <= keyData.time.length - 1; t += 1) {

                    nullPosition.setValueAtTime(keyData.time[t], keyData.pos[t]);
                    nullPosition.setInterpolationTypeAtKey(1, KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR);


                }

                for (var g = 1; g <= nullPosition.numKeys; g++) {
                    var u = g === 1 ? [0, 0, 0] : (nullPosition.keyValue(g - 1) - nullPosition.keyValue(g)) / 3;
                    var v = g === nullPosition.numKeys ? [0, 0, 0] : (nullPosition.keyValue(g + 1) - nullPosition.keyValue(g)) / 3;
                    nullPosition.setSpatialTangentsAtKey(g, u, v);
                }
                

            } else if (item === 1) {
                add_Null_Pen();
                var keyData = {
                    time: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                    pos: [
                        [cx, cy, 0],
                        [cx + wInc / 2, cy - hInc, dInc / 2],
                        [cx + wInc, cy, 0],
                        [cx, cy, 0],
                        [cx, cy, dInc],
                        [cx + wInc / 2, cy - hInc, dInc / 2],
                        [cx, cy, dInc],
                        [cx + wInc, cy, dInc],
                        [cx + wInc / 2, cy - hInc, dInc / 2],
                        [cx + wInc, cy, dInc],
                        [cx + wInc, cy, 0]
                    ]
                }
                var nullPosition = nullObject.property("Position");

                for (var t = 0; t <= keyData.time.length - 1; t += 1) {

                    nullPosition.setValueAtTime(keyData.time[t], keyData.pos[t]);
                    nullPosition.setInterpolationTypeAtKey(1, KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR);


                }

                for (var g = 1; g <= nullPosition.numKeys; g++) {
                    var u = g === 1 ? [0, 0, 0] : (nullPosition.keyValue(g - 1) - nullPosition.keyValue(g)) / 3;
                    var v = g === nullPosition.numKeys ? [0, 0, 0] : (nullPosition.keyValue(g + 1) - nullPosition.keyValue(g)) / 3;
                    nullPosition.setSpatialTangentsAtKey(g, u, v);
                }
              


            } else if (item === 2) {

                add_Null_Pen();
                nullObject.property("Position").expression = "freq=1;\nt=time+47;\ntheta = 2 * Math.PI;\nalpha = 0.1;\nx = (Math.cos(t * alpha*freq)) * (Math.cos(t* theta*freq));\ny = (Math.cos(t * alpha*freq)) * (Math.sin(t * theta*freq));\nz = (Math.sin(t * alpha*freq));\nvalue +[x * " + wInc + ", y * " + hInc + ", z * " + dInc + " ];";

            } else if (item === 3) {
                add_Null_Pen();

                var keyData = {
                    time: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                    pos: [
                        [cx, cy, 0],
                        [cx + wInc, cy, 0],
                        [cx + (wInc / 2), cy, dInc],
                        [cx, cy, 0],
                        [cx, cy + hInc, 0],
                        [cx + wInc, cy + hInc, 0],
                        [cx + wInc, cy, 0],
                        [cx + (wInc / 2), cy, dInc],
                        [cx + (wInc / 2), cy + hInc, dInc],
                        [cx, cy + hInc, 0],
                        [cx + wInc, cy + hInc, 0],
                        [cx + (wInc / 2), cy + hInc, dInc]
                    ]
                }
                var nullPosition = nullObject.property("Position");

                for (var t = 0; t <= keyData.time.length - 1; t += 1) {

                    nullPosition.setValueAtTime(keyData.time[t], keyData.pos[t]);
                    nullPosition.setInterpolationTypeAtKey(1, KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR);


                }

                for (var g = 1; g <= nullPosition.numKeys; g++) {
                    var u = g === 1 ? [0, 0, 0] : (nullPosition.keyValue(g - 1) - nullPosition.keyValue(g)) / 3;
                    var v = g === nullPosition.numKeys ? [0, 0, 0] : (nullPosition.keyValue(g + 1) - nullPosition.keyValue(g)) / 3;
                    nullPosition.setSpatialTangentsAtKey(g, u, v);
                }
               



            } else if (item === 4) {
                add_Null_Pen();

                var keyData = {
                    time: [1, 2, 3, 4, 5, 6, 7, 8],
                    pos: [
                        [cx, cy, 0],
                        [cx + wInc, cy, 0],
                        [cx + (wInc / 2), cy, dInc],
                        [cx, cy, 0],
                        [cx + wInc / 2, cy - hInc, dInc / 2],
                        [cx + wInc, cy, 0],
                        [cx + (wInc / 2), cy, dInc],
                        [cx + wInc / 2, cy - hInc, dInc / 2]
                    ]
                }
                var nullPosition = nullObject.property("Position");

                for (var t = 0; t <= keyData.time.length - 1; t += 1) {

                    nullPosition.setValueAtTime(keyData.time[t], keyData.pos[t]);
                    nullPosition.setInterpolationTypeAtKey(1, KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR);


                }

                for (var g = 1; g <= nullPosition.numKeys; g++) {
                    var u = g === 1 ? [0, 0, 0] : (nullPosition.keyValue(g - 1) - nullPosition.keyValue(g)) / 3;
                    var v = g === nullPosition.numKeys ? [0, 0, 0] : (nullPosition.keyValue(g + 1) - nullPosition.keyValue(g)) / 3;
                    nullPosition.setSpatialTangentsAtKey(g, u, v);
                }
              
            }

            app.endUndoGroup();


        }

        function add_Null_Pen() {

            if ((app.project.activeItem === undefined) || !(app.project.activeItem instanceof CompItem)) {
                alert("Select or open a comp first.", scriptName);
                return;
            }

            var activeItem = app.project.activeItem;



            var comp = {
                width: activeItem.width,
                height: activeItem.height,
                duration: activeItem.duration
            }


            solidLayer = activeItem.layers.addSolid([0, 0, 0], "effect", comp.width, comp.height, 1, comp.duration);
            solidLayer.label = 2;
            solidLayer.name = "ink";
            nullObject = activeItem.layers.addNull();
            nullObject.name = "pen_" + nullObject.name;

            nullObject.threeDLayer = true;
            nullObject.label = 9;
            nullObject.property("Anchor Point").setValue([50, 50, 0]);
            nullObject.property("Scale").expression = "[25,25,25]";
            nullObject.property("Effects").addProperty("Color Control");
            nullObject.property("Effects").property("Color Control").name = "Birth Color";
            nullObject.property("Effects").addProperty("Slider Control");
            nullObject.property("Effects").property("Slider Control").property("Slider").setValue(25);
            nullObject.property("Effects").property("Slider Control").name = "Birth Size";
            nullObject.property("Effects").addProperty("Color Control");
            nullObject.property("Effects").property("Color Control").name = "Death Color";
            nullObject.property("Effects").addProperty("Slider Control");
            nullObject.property("Effects").property("Slider Control").property("Slider").setValue(25);
            nullObject.property("Effects").property("Slider Control").name = "Death Size";

            var offset3D = 'p = thisComp.layer("' + nullObject.name + '").position;\nd = (p - [thisComp.width / 2, thisComp.height / 2, 0]) / thisComp.width;';

            solidLayer.property("Effects").addProperty("CC Particle World");
            var axis = ["X", "Y", "Z"];
            for (var i = 0; i <= 2; i += 1) {
                solidLayer.property("Effects").property("CC Particle World").property("Position " + axis[i]).expression = offset3D + '\n d[' + i + ']';
                solidLayer.property("Effects").property("CC Particle World").property("Radius " + axis[i]).setValue(0);
            }

            solidLayer.property("Effects").property("CC Particle World").property("Animation").setValue(1);
            solidLayer.property("Effects").property("CC Particle World").property("Velocity").setValue(0);
            solidLayer.property("Effects").property("CC Particle World").property("Inherit Velocity %").setValue(0);
            solidLayer.property("Effects").property("CC Particle World").property("Gravity").setValue(0);
            solidLayer.property("Effects").property("CC Particle World").property("Resistance").setValue(0);
            solidLayer.property("Effects").property("CC Particle World").property("Birth Rate").setValue(birthrate);
            solidLayer.property("Effects").property("CC Particle World").property("Longevity (sec)").setValue(longevity);
            solidLayer.property("Effects").property("CC Particle World").property("Particle Type").setValue(5);
            solidLayer.property("Effects").property("CC Particle World").property("Rotation Speed").setValue(0);
            solidLayer.property("Effects").property("CC Particle World").property("Initial Rotation").setValue(0);
            solidLayer.property("Effects").property("CC Particle World").property("Birth Size").setValue(0.1);
            solidLayer.property("Effects").property("CC Particle World").property("Birth Size").expression = 'thisComp.layer("' + nullObject.name + '").effect("Birth Size")("Slider")/1000';
            solidLayer.property("Effects").property("CC Particle World").property("Death Size").setValue(0.1);
            solidLayer.property("Effects").property("CC Particle World").property("Death Size").expression = 'thisComp.layer("' + nullObject.name + '").effect("Death Size")("Slider")/1000';
            solidLayer.property("Effects").property("CC Particle World").property("Birth Color").expression = 'thisComp.layer("' + nullObject.name + '").effect("Birth Color")("Color")';
            solidLayer.property("Effects").property("CC Particle World").property("Death Color").expression = 'thisComp.layer("' + nullObject.name + '").effect("Death Color")("Color")';

            solidLayer.property("Effects").property("CC Particle World").property("Size Variation").setValue(0);
            solidLayer.property("Effects").property("CC Particle World").property("Max Opacity").setValue(100);

            solidLayer.property("Effects").addProperty("Paint Bucket");
            solidLayer.property("Effects").property("Paint Bucket").property("Fill Point").setValue([-100, -100]);
            solidLayer.property("Effects").property("Paint Bucket").property("Fill Selector").setValue(4);
            solidLayer.property("Effects").property("Paint Bucket").property(7).setValue(true);
            solidLayer.property("Effects").property("Paint Bucket").enabled = false;
            solidLayer.property("Effects").addProperty("Transform");
            solidLayer.property("Effects").property("Transform").enabled = false;

        }








        function addTool() {


            if ((app.project.activeItem === undefined) || !(app.project.activeItem instanceof CompItem)) {
                alert("Select or open a comp first.", scriptName);
                return;
            }
            var activeItem = app.project.activeItem;



            app.beginUndoGroup("add object");
            var item = operNumGen();

            var comp = {
                width: activeItem.width,
                height: activeItem.height,
                duration: activeItem.duration
            }
            var cx = comp.width / 2;
            var cy = comp.height / 2;



            if (item === 0) {
                add_Null_Pen();
            } else if (item === 1) {
                var selectedLayer = activeItem.selectedLayers;
                if (selectedLayer.length == 1) {
                    var rotNull = activeItem.layers.addNull();
                    rotNull.moveBefore(selectedLayer[0]);

                    var numKeys = selectedLayer[0].position.numKeys;
                    var myKeyframe, myKeyframeTime, myKeyframeValue;

                    if (numKeys > 0) {
                        myKeyframeTime = selectedLayer[0].position.keyTime(1);
                        activeItem.time = myKeyframeTime;
                        rotNull.name = "delete me after you finish orienting";
                        rotNull.threeDLayer = true;
                        rotNull.property("Anchor Point").setValue([50, 50, 0]);
                        rotNull.label = 0;
                        rotNull.property("Transform").property("Position").setValue(selectedLayer[0].property("Transform").property("Position").value);
                        selectedLayer[0].parent = rotNull;
                        selectedLayer[0].selected = true;
                    } else {
                        alert('There are no keyframes on selected pen. If you use expression - convert them to keyframes first from keyframe assistant dropdown menu - Convert Expressions to Keyframes');
                    }

                } else {
                    alert("Select null you want to orient.", scriptName);
                }


            } else if (item === 2) {
                nullObject = activeItem.layers.addNull();
                nullObject.name = "camera_orbit_" + nullObject.name;
                nullObject.threeDLayer = true;
                nullObject.label = 11;

                var camera = activeItem.layers.addCamera("cam", [0, 0]);
                camera.property("Transform").property("Position").setValue([0, cy, -1000]);
                camera.property("Transform").property("Point of Interest").setValue([cx, cy, 0]);
                camera.parent = nullObject;
            } else if (item === 3) {

                var selectedLayer = activeItem.selectedLayers;
                if (selectedLayer.length == 1) {
                    var camera = activeItem.layers.addCamera("camera_follow", [0, 0]);
                    camera.property("Transform").property("Position").setValue([cx / 2, cy / 2, 200]);
                    camera.property("Transform").property("Point of Interest").expression = "thisComp.layer('" + selectedLayer[0].name + "').transform.position";

                } else {
                    alert("Select null or other layer that you want your camera to follow.", scriptName);
                }

            } else if (item === 4) {

                var selectedLayer = activeItem.selectedLayers;
                if (selectedLayer.length == 1) {
                    solidLayer = activeItem.layers.addSolid([0, 0, 0], "lens flare", comp.width, comp.height, 1, comp.duration);
                    solidLayer.label = 10;
                    solidLayer.name = "flare";
                     activeItem.layer("flare").blendingMode =  BlendingMode.SCREEN;
                    solidLayer.property("Effects").addProperty("Lens Flare");
                    solidLayer.property("Effects").property("Lens Flare").property("Flare Center").expression = 'thisComp.layer("' + selectedLayer[0].name + '").toComp([50,50,0])'
                   
                } else {
                    alert("Select the 3d layer that you want your flare to follow.", scriptName);
                }



            }

            app.endUndoGroup();
        }







        function BuildAndShowUI(thisObj) {
            var my_palette = (thisObj instanceof Panel) ? thisObj : new Window("palette", scriptName, undefined, {
                resizeable: true
            });
            if (my_palette != null) {

                var res =
                    "group { \
                            orientation:'column', alignment:['fill','top'], alignChildren:['left','top'], spacing:4, margins:[0,0,0,0], \
					    	tools: Group { \
                            orientation:'row', alignment:['fill','top'], \
                            operations: DropDownList {properties:{items:['Pen','Orient Null','Orbit Cam','Follow Cam','Flare'], alignment:['fill','center'] }, preferredSize:[-1,20]},\
                            operButton: Button { text:'  add tool  ', alignment:['fill','center'],preferredSize:[10,30], }, \
                        }, \
						settings: Group { \
                             orientation:'row', alignment:['fill','top'], \
                             brithTXT: StaticText { text:'birth rate:', alignment:['fill','center'],preferredSize:[5,20], }, \
                             birthrate: EditText { text:'50', alignment:['fill','center'],preferredSize:[15,20] }, \
                             lifeTXT: StaticText { text:'lifespan(sec):', alignment:['fill','center'],preferredSize:[5,20], }, \
                             lifespan: EditText { text:'100', alignment:['fill','center'],preferredSize:[15,20] }, \
                         }, \
                            shapes: Group { \
                            orientation:'row', alignment:['fill','top'], \
                            dropDown: DropDownList {properties:{items:['Cube','Pyramid_4','Sphere','Toblerone','Pyramid_3'], alignment:['fill','center'] }, preferredSize:[-1,20]},\
                            okButton: Button { text:'  add shape  ', alignment:['fill','center'],preferredSize:[10,30], }, \
						}, \
                          params: Group { \
                            orientation:'row', alignment:['fill','top'], \
                            x: StaticText { text:'width:', alignment:['fill','center'],preferredSize:[15,20], }, \
                            argsX: EditText { text:'100', alignment:['fill','center'], preferredSize:[15,20] }, \
                            y: StaticText { text:'height:', alignment:['fill','center'],preferredSize:[15,20], }, \
                            argsY: EditText { text:'100', alignment:['fill','center'], preferredSize:[15,20] }, \
                            z: StaticText { text:'depth:', alignment:['fill','center'],preferredSize:[15,20], }, \
                            argsZ: EditText { text:'100', alignment:['fill','center'], preferredSize:[15,20] }, \
                            label: StaticText { text:'   ', alignment:['fill','center'],preferredSize:[10,30], }, \
						}, \
                       }";

                my_palette.margins = [25, 25, 25, 25];

                my_palette.grp = my_palette.add(res);


                function setTXT() {
                    my_palette.grp.params.argsX.txt = my_palette.grp.params.argsX;
                    my_palette.grp.params.argsY.txt = my_palette.grp.params.argsY;
                    my_palette.grp.params.argsZ.txt = my_palette.grp.params.argsZ;
                }

                function setSettings() {
                    my_palette.grp.settings.birthrate.txt = my_palette.grp.settings.birthrate;
                    my_palette.grp.settings.lifespan.txt = my_palette.grp.settings.lifespan;
                }

                my_palette.grp.params.argsX.onChange = argsX_Input_changed;
                my_palette.grp.params.argsY.onChange = argsY_Input_changed;
                my_palette.grp.params.argsZ.onChange = argsZ_Input_changed;

                my_palette.grp.shapes.okButton.onClick = setTXT;

                my_palette.grp.shapes.okButton.onClick = setSettings;
                my_palette.grp.shapes.okButton.onClick = addObject;

                my_palette.grp.settings.birthrate.onChange = birthRateSet;
                my_palette.grp.settings.lifespan.onChange = lifeSpanSet;

                my_palette.grp.tools.operButton.onClick = setSettings;
                my_palette.grp.tools.operButton.onClick = addTool;

                my_palette.grp.shapes.dropDown.onChange = dropNumGen;
                my_palette.grp.tools.operations.onChange = operNumGen;

                my_palette.onResizing = my_palette.onResize = function() {
                    this.layout.resize();
                }

            }
            return my_palette;
        }

        if (parseFloat(app.version) < 8) {
            alert("This script requires After Effects CS3 or later.", scriptName);
            return;
        }

        var my_palette = BuildAndShowUI(thisObj);
        my_palette.grp.shapes.dropDown.selection = 0;
        my_palette.grp.tools.operations.selection = 0;
        if (my_palette != null) {
            if (my_palette instanceof Window) {
                my_palette.center();
                my_palette.show();
            } else {
                my_palette.layout.layout(true);
                my_palette.layout.resize();
            }
        } else {
            alert("Could not open the user interface.", scriptName);
        }
    }

    ScriptBody(this);

}