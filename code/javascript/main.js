//function for navbar
let isNav1Visible = true;

function movenav() {
  if (isNav1Visible) {
    document.documentElement.style.setProperty('--nav1-display', 'none');
    document.documentElement.style.setProperty('--nav2-display', 'inline-block');
  } else {
    document.documentElement.style.setProperty('--nav1-display', 'inline-block');
    document.documentElement.style.setProperty('--nav2-display', 'none');
  }
  isNav1Visible = !isNav1Visible;
}

//Add new js down here vvv