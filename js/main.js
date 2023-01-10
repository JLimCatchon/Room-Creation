const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );


camera.position.y = 0; //0
camera.position.z = -25; //-30
camera.position.x = 5; // 5
///walls
const bottomWallGeometry = new THREE.BoxGeometry( 30, 1, 15 );
const bottomWallMaterial = new THREE.MeshBasicMaterial( { color: 'rgb(250,217,194)'} );
const bottomWall = new THREE.Mesh( bottomWallGeometry, bottomWallMaterial );
scene.add( bottomWall );

const rightWallGeometry = new THREE.BoxGeometry( 1, 30, 30 );
const rightWallMaterial = new THREE.MeshBasicMaterial( { color: 'rgb(225,198,179)'} );
const rightWall = new THREE.Mesh( rightWallGeometry, rightWallMaterial );
scene.add( rightWall );

const leftWallGeometry = new THREE.BoxGeometry(1,25,30);
const leftWallMaterial = new THREE.MeshBasicMaterial({color: 'rgb(225,198,179)'});
const leftWall = new THREE.Mesh(leftWallGeometry,leftWallMaterial);
scene.add(leftWall);

const backWallGeometry = new THREE.PlaneGeometry(30,20);
const backWallMaterial = new THREE.MeshBasicMaterial({color: 'rgb(225,198,179)'});
const backWall = new THREE.Mesh(backWallGeometry,backWallMaterial);
scene.add(backWall);

const topWallGeometry = new THREE.BoxGeometry(30,30,1);
const topWallMaterial = new THREE.MeshBasicMaterial({color: 'rgb(225,198,179)'});
const topWall = new THREE.Mesh(topWallGeometry,topWallMaterial);
scene.add(topWall);

//part of window

const windowBorderLeftGeometry = new THREE.BoxGeometry(1,5,1);
const windowBorderLeftMaterial = new THREE.MeshBasicMaterial({color: 'rgb(181,124,91)'});
const windowBorderLeft = new THREE.Mesh(windowBorderLeftGeometry,windowBorderLeftMaterial);
scene.add(windowBorderLeft);

const windowBorderRight = new THREE.Mesh(windowBorderLeftGeometry,windowBorderLeftMaterial);
scene.add(windowBorderRight);

const windowBorderTopGeometry = new THREE.BoxGeometry(5,1,1);
const windowBorderTopMaterial = new THREE.MeshBasicMaterial({color: 'rgb(184,123,76)'});
const windowBorderTop = new THREE.Mesh(windowBorderTopGeometry,windowBorderTopMaterial);
scene.add(windowBorderTop);

const windowBorderBottom = new THREE.Mesh(windowBorderTopGeometry,windowBorderTopMaterial);
scene.add(windowBorderBottom);

const windowGeometry = new THREE.PlaneGeometry(5,5);
const windowMaterial = new THREE.MeshBasicMaterial({color:'rgb(129,247,241)'});
const windowMiddle = new THREE.Mesh(windowGeometry,windowMaterial);
scene.add(windowMiddle);

//mirror

const mirrorGeometry = new THREE.PlaneGeometry(5,9);
const mirrorMaterial = new THREE.MeshBasicMaterial({color:'rgb(229,240,238)'});
const mirror = new THREE.Mesh(mirrorGeometry,mirrorMaterial);
scene.add(mirror);


const mirrorBorderGeometry = new THREE.BoxGeometry(1,10,1);
const mirrorBorderMaterial = new THREE.MeshBasicMaterial({color: 'rgb(181,124,91)'})
const mirrorBorder = new THREE.Mesh(mirrorBorderGeometry,mirrorBorderMaterial);
scene.add(mirrorBorder);

const mirrorBorderRight = new THREE.Mesh(mirrorBorderGeometry,mirrorBorderMaterial);
scene.add(mirrorBorderRight);

const mirrorBorderTopGeometry = new THREE.BoxGeometry(6,1,1);
const mirrorBorderTopMaterial = new THREE.MeshBasicMaterial({color: 'rgb(181,124,91)'});
const mirrorBorderTop = new THREE.Mesh(mirrorBorderTopGeometry,mirrorBorderTopMaterial);
scene.add(mirrorBorderTop);

const mirrorBorderBottom = new THREE.Mesh(mirrorBorderTopGeometry,mirrorBorderTopMaterial);
scene.add(mirrorBorderBottom);


const mirrorHolderGeometry = new THREE.CylinderGeometry(0.87,0,1,3);
const mirrorHolderMaterial = new THREE.MeshBasicMaterial({color: 'rgb(181,124,91)'});
const mirrorHolder = new THREE.Mesh(mirrorHolderGeometry,mirrorHolderMaterial);
scene.add(mirrorHolder);

const mirrorHolderLineGeometry = new THREE.BoxGeometry(1,3,1);
const mirrorHolderLineMaterial = new THREE.MeshBasicMaterial({color: 'rgb(225,200,136)'});
const mirrorHolderLine = new THREE.Mesh(mirrorHolderLineGeometry,mirrorHolderLineMaterial);
scene.add(mirrorHolderLine);

//drawer
const drawerGeometry = new THREE.BoxGeometry(6,15,5);
const drawerMaterial = new THREE.MeshBasicMaterial({color: 'rgb(156,146,116)'});
const drawer = new THREE.Mesh(drawerGeometry,drawerMaterial);
scene.add(drawer);

const drawerHandleGeometry = new THREE.CapsuleGeometry(1,2,1,6);
const drawerHandleMaterial = new THREE.MeshBasicMaterial({color: 'rgb(202,143,32)'});
const drawerHandle = new THREE.Mesh(drawerHandleGeometry,drawerHandleMaterial);
scene.add(drawerHandle);

const drawerLineGeometry = new THREE.BoxGeometry(1,14,1);
const drawerLineMaterial = new THREE.MeshBasicMaterial({color:'rgb(46,40,40)'});
const drawerLine = new THREE.Mesh(drawerLineGeometry,drawerLineMaterial);
scene.add(drawerLine);

//mat
const matGeometry = new THREE.BoxGeometry(15,1,7);
const matMaterial = new THREE.MeshBasicMaterial({color: 'rgb(202,143,32)'});
const mat = new THREE.Mesh(matGeometry,matMaterial);
scene.add(mat);

//bed
const bedGeometry = new THREE.BoxGeometry(14.5,1,7);
const bedMaterial = new THREE.MeshBasicMaterial({color: 'rgb(221,217,207)'});
const bed = new THREE.Mesh(bedGeometry,bedMaterial);
scene.add(bed);

const bedHolderGeometry = new THREE.BoxGeometry(15,5,7);
const bedHolderMaterial = new THREE.MeshBasicMaterial({color: 'rgb(170,136,69)'});
const bedHolder = new THREE.Mesh(bedHolderGeometry,bedHolderMaterial);
scene.add(bedHolder);

const bedWallGeometry = new THREE.PlaneGeometry(15,5);
const bedWallMaterial = new THREE.MeshBasicMaterial({color: 'rgb(203,142,0)'});
const bedWall = new THREE.Mesh(bedWallGeometry,bedWallMaterial);
scene.add(bedWall);


//pillow
const pillowGeometry = new THREE.CylinderGeometry(2,2,10);
const pillowMaterial = new THREE.MeshBasicMaterial({color: 'rgb(229,228,226)'});
const pillow = new THREE.Mesh(pillowGeometry,pillowMaterial);
scene.add(pillow);

//table
const tableGeometry = new THREE.BoxGeometry(10,1,7);
const tableMaterial = new THREE.MeshBasicMaterial({color: 'rgb(229,228,226)'});
const table = new THREE.Mesh(tableGeometry,tableMaterial);
scene.add(table);
const tableStandGeometry = new THREE.BoxGeometry(10,5,1,1,1);
const tableStandMaterial = new THREE.MeshBasicMaterial({color: 'rgb(189,187,183)'}); 
const tableStand = new THREE.Mesh(tableStandGeometry,tableStandMaterial);
scene.add(tableStand);

//chair
const chairGeometry = new THREE.BoxGeometry(5,5,3);
const chairMaterial = new THREE.MeshBasicMaterial({color: 'rgb(176,168,152)'});
const chair = new THREE.Mesh(chairGeometry,chairMaterial);
scene.add(chair);

//lights
const lightGeometry = new THREE.CylinderGeometry(3,1,3);
const lightMaterial = new THREE.MeshBasicMaterial({color: 'rgb(235,175,54)'});
const light = new THREE.Mesh(lightGeometry,lightMaterial);
scene.add(light);

//big Window
const bigWindowGeometry = new THREE.BoxGeometry(1,10,5);
const bigWindowMaterial = new THREE.MeshBasicMaterial({color: 'rgb(181,124,91)'});
const bigWindow = new THREE.Mesh(bigWindowGeometry,bigWindowMaterial);
scene.add(bigWindow);

const bigWindowInnerGeometry = new THREE.BoxGeometry(1,9,4);
const bigWindowInnerMaterial = new THREE.MeshBasicMaterial({color: 'rgb(129,247,241)'});
const bigWindowInner = new THREE.Mesh(bigWindowInnerGeometry,bigWindowInnerMaterial);
scene.add(bigWindowInner);

//lamp
const lampHeadGeometry = new THREE.CylinderGeometry(1,2,2,8);
const lampHeadMaterial = new THREE.MeshBasicMaterial({color: 'rgb(158,155,148)'});
const lampHead = new THREE.Mesh(lampHeadGeometry,lampHeadMaterial);
scene.add(lampHead);

const lampStandGeometry = new THREE.CylinderGeometry(1,1,4,5);
const lampStandMaterial = new THREE.MeshBasicMaterial({color: 'rgb(99,115,176)'});
const lampStand = new THREE.Mesh(lampStandGeometry,lampStandMaterial);


scene.add(lampStand);
///Insert Code here



function animate() {
	requestAnimationFrame( animate );
    bottomWall.position.x = 0;
    bottomWall.position.y = -10;
    bottomWall.position.z = -38;

   
    rightWall.position.x = 15;
    rightWall.position.y = 0;
    rightWall.position.z = -45;
    
    

    leftWall.position.x = -15;
    leftWall.position.y = 0;
    leftWall.position.z = -35;
    leftWall.rotation.y = 245;
   
    
    backWall.position.x = 0;
    backWall.position.y = 0;
    backWall.position.z = -45;
    
    topWall.position.x = 2.5;
    topWall.position.y = 12;
    topWall.position.z =-45;
    topWall.rotation.x = 1.6;


  //window
    windowBorderLeft.position.x = 5;
    windowBorderLeft.position.y = 0;
    windowBorderLeft.position.z = -45;

    windowBorderRight.position.x = 10;
    windowBorderRight.position.y = 0;
    windowBorderRight.position.z = -45;
  
    windowBorderTop.position.x = 8;
    windowBorderTop.position.y = -2;
    windowBorderTop.position.z = -45;

    
    windowBorderBottom.position.x = 8;
    windowBorderBottom.position.y = 2;
    windowBorderBottom.position.z = -45;

 
    windowMiddle.position.x = 7;
    windowMiddle.position.y = 0;
    windowMiddle.position.z = -45;

    //mirror
    mirror.position.x = -4;
    mirror.position.y = -2
    mirror.position.z = -45;
   
    mirrorBorder.position.x = -7;
    mirrorBorder.position.y = -2;
    mirrorBorder.position.z =-45.5;
    
    mirrorBorderRight.position.x = -2;
    mirrorBorderRight.position.y = -2;
    mirrorBorderRight.position.z= -45.5;

    mirrorBorderTop.position.x = -4.5;
    mirrorBorderTop.position.y = 3;
    mirrorBorderTop.position.z= -45.5;

    mirrorBorderBottom.position.x = -4.5;
    mirrorBorderBottom.position.y = -6.5;
    mirrorBorderBottom.position.z=-45.5;

    mirrorHolder.position.x= -4.5;
    mirrorHolder.position.y= 5;
    mirrorHolder.position.z = -45.5;

    mirrorHolderLine.position.x = -4.4;
    mirrorHolderLine.position.y = 4.5;
    mirrorHolderLine.position.z = -45.5;

    mirrorHolderLine.rotation.x = 160;
    mirrorHolderLine.rotation.y = 180;

    // drawer
    drawer.position.x = -11;
    drawer.position.y = -2;
    drawer.position.z = -40;
    drawerHandle.position.x = -8.5;
    drawerHandle.position.y = -2;
    drawerHandle.position.z = -40;

    drawerLine.position.x   =-8.5;
    drawerLine.position.y   =-2;
    drawerLine.position.z   =-40;


    //mat
    mat.position.x = 1;
    mat.position.y = -9.5;
    mat.position.z = -40;

    //bed
    bed.position.x = 8;
    bed.position.y = -6;
    bed.position.z = -40;

    bedHolder.position.x = 8;
    bedHolder.position.y = -9;
    bedHolder.position.z =-40;

    bedWall.position.x =8;
    bedWall.position.y=-5;
    bedWall.position.z =-40;

    //pillow
    pillow.position.x= 7;
    pillow.position.y=-5;
    pillow.position.z=-40;
  
    pillow.rotation.x = 7.4;
    pillow.rotation.y = 6.3;
    pillow.rotation.z = 4.6;
    //pillow.scale.set(100,100,100);

    //table
    table.position.x=-10;
    table.position.y=-5;
    table.position.z=-33;
    
    tableStand.position.x=-10.1;
    tableStand.position.y=-7.1;
    tableStand.position.z=-36;

    //chair
    chair.position.x = -4;
    chair.position.y = -8;
    chair.position.z = -32;

    //light
    light.position.x = 1;
    light.position.y = 12;
    light.position.z =-40;

    //big window
    bigWindow.position.x = 13.5;
    bigWindow.position.y = 0;
    bigWindow.position.z =-31;

    bigWindowInner.position.x =13;
    bigWindowInner.position.y = 0;
    bigWindowInner.position.z =-30.8;

    //lamp
    lampHead.position.x=-9.2;
    lampHead.position.y=0;
    lampHead.position.z=-35.2;

    lampStand.position.x=-9;
    lampStand.position.y=-2.3;
    lampStand.position.z=-35;
    renderer.render( scene, camera );
}

animate();


