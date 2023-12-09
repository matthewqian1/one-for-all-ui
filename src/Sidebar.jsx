

function Sidebar() {

    const closeNav = () => {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("sidebarTrigger").style.marginLeft= "0";
    }
    const openNav = () => {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("sidebarTrigger").style.marginLeft = "250px";
    }

  return <div><div id="mySidebar" className="sidebar">
  <a className="closebtn" onClick={closeNav}>X</a>
  <a >About</a>
  <a >Services</a>
  <a >Clients</a>
  <a >Contact</a>
</div>
<div id="sidebarTrigger">
  <button class="openbtn" onClick={openNav}>☰</button>  
</div>
</div>
}

export default Sidebar;

