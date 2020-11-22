var canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;
block_img_width = 30;
block_img_height = 30;
var player_img_object = "";
var block_img_object = "";

function player_update() {
    fabric.Image.fromURL("bubbles.png", function (Img) {
        player_img_object = Img;
        player_img_object.scaleToWidth(150);
        player_img_object.scaleToHeight(140);
        player_img_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_img_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_img_object = Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_img_object);
    });
}