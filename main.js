const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let img = new Image();
let fileName = '';

const downloadBtn = document.getElementById('download-btn');
const uploadFile = document.getElementById('upload-file');
const revertBtn = document.getElementById('revert-btn');

// Add Filter and Effects
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        if (e.target.classList.contains('brightness-add')) {
            Caman('#canvas', img, function () {
                this.brightness(5);
                this.render();
            });
        } else if (e.target.classList.contains('brightness-remove')) {
            Caman('#canvas', img, function () {
                this.brightness(-5);
                this.render();
            });

        } else if (e.target.classList.contains('contrast-add')) {
            Caman('#canvas', img, function () {
                this.contrast(5);
                this.render();
            });

        } else if (e.target.classList.contains('contrast-remove')) {
            Caman('#canvas', img, function () {
                this.contrast(-5);
                this.render();
            });

        } else if (e.target.classList.contains('saturation-add')) {
            Caman('#canvas', img, function () {
                this.saturation(5);
                this.render();
            });

        } else if (e.target.classList.contains('saturation-remove')) {
            Caman('#canvas', img, function () {
                this.saturation(-5);
                this.render();
            });

        } else if (e.target.classList.contains('vibrance-add')) {
            Caman('#canvas', img, function () {
                this.vibrance(5);
                this.render();
            });

        } else if (e.target.classList.contains('vibrance-remove')) {
            Caman('#canvas', img, function () {
                this.vibrance(-5);
                this.render();
            });

        } else if (e.target.classList.contains('vintage-add')) {
            Caman('#canvas', img, function () {
                this.vintage();
                this.render();
            });
        } else if (e.target.classList.contains('lomo-add')) {
            Caman('#canvas', img, function () {
                this.lomo();
                this.render();
            });
        } else if (e.target.classList.contains('clarity-add')) {
            Caman('#canvas', img, function () {
                this.clarity();
                this.render();
            });
        }
        else if (e.target.classList.contains('sincity-add')) {
            Caman('#canvas', img, function () {
                this.sinCity();
                this.render();
            });
        }
        else if (e.target.classList.contains('crossprocess-add')) {
            Caman('#canvas', img, function () {
                this.crossProcess();
                this.render();
            });
        } else if (e.target.classList.contains('pinhole-add')) {
            Caman('#canvas', img, function () {
                this.pinhole();
                this.render();
            });
        } else if (e.target.classList.contains('nostalgia-add')) {
            Caman('#canvas', img, function () {
                this.nostalgia();
                this.render();
            });
        } else if (e.target.classList.contains('hermajesty-add')) {
            Caman('#canvas', img, function () {
                this.herMajesty();
                this.render();
            });
        }
    }
});

// Revert Filters
revertBtn.addEventListener('click', () => {
    Caman('#canvas', img, function () {
        this.revert();
    });
})

// Upload file
uploadFile.addEventListener('change', () => {
    // Get file
    const file = document.getElementById("upload-file").files[0];

    // Init FileReader
    const reader = new FileReader();

    if (file) {
        // Set file name
        fileName = file.name;
        // Reader data us URL
        reader.readAsDataURL(file);
    }

    // Add image to canvas
    reader.addEventListener('load', () => {
        // Create img
        img = new Image();
        // Set src
        img.src = reader.result;
        // On image load, add to canvas
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
            canvas.removeAttribute('data-caman-id');
        }
    }, false);
});


// Download Event 
downloadBtn.addEventListener('click', (e) => {
    // Get file ext
    const fileExtension = fileName.slice(-4);

    // Init new filename
    let newFileName;

    // Check image type
    if (fileExtension === '.jpg' || fileExtension === '.png') {
        newFileName = fileName.substring(0, fileName.length - 4) + ' - edited.jpg';
    }

    // Call download
    download(canvas, newFileName);
});

const download = (cancas, fileName) => {
    // Init event
    let e;
    // Create link
    const link = document.createElement('a');
    // Set props
    link.download = fileName;
    link.href = canvas.toDataURL('image/jpeg', 0.8);
    // New mouse event
    e = new MouseEvent('click');
    // Dispatch event
    link.dispatchEvent(e);
}