var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/') + 1, url.indexOf('.'));

if(filename.indexOf('-') !== -1) {
    var filename = filename.substring(0 , filename.indexOf('-'));
}

var activePage = { 
    'updatelist': '',
    'tvguides': '',
    'programtv': '',
    'content': '',
    'person': '',
    'gallery': ''
}

activePage[filename] = 'active';
console.log(activePage);

var sidenav = `
                <div class="list-group border-0 card text-center text-md-left">
                    <a href="./updatelist.html" class="list-group-item d-inline-block collapsed ${activePage.updatelist}">
                        <i class="fas fa-layer-group"></i>
                        <span class="d-none d-md-inline">
                            Update List
                        </span>
                    </a>

                    <a href="#menu1" class="list-group-item d-inline-block collapsed  ${activePage.tvguides}" data-toggle="collapse"
                        aria-expanded="false">
                        <i class="fas fa-thumbtack"></i>
                        <span class="d-none d-md-inline">
                            Channel Master
                        </span>
                    </a>
                    <div class="collapse " id="menu1" data-parent="#sidebar">
                        <a href="./tvguides.html" class="list-group-item">Channel & TV Guides</a>
                    </div>

                    <a href="#menu3" class="list-group-item d-inline-block collapsed ${activePage.programtv}" data-toggle="collapse"
                        aria-expanded="false">
                        <i class="fas fa-tv"></i>
                        <span class="d-none d-md-inline">
                            ProgramTV Master
                        </span>
                    </a>
                    <div class="collapse" id="menu3" data-parent="#sidebar">

                        <a href="./programtv-category.html" class="list-group-item" data-parent="#menu3">
                            Program Category
                        </a>
                        <a href="./programtv.html" class="list-group-item" data-parent="#menu3">
                            Program TV
                        </a>
                    </div>

                    <a href="#menu4" class="list-group-item d-inline-block collapsed ${activePage.content}" data-toggle="collapse"
                        aria-expanded="false">
                        <i class="fas fa-file-alt"></i>
                        <span class="d-none d-md-inline">
                                Contents Master
                        </span>
                    </a>
                    <div class="collapse" id="menu4" data-parent="#sidebar">

                        <a href="./content-category.html" class="list-group-item" data-parent="#menu4">
                            Contents Category
                        </a>
                        <a href="./content.html" class="list-group-item" data-parent="#menu4">
                            Contents
                        </a>
                    </div>

                    <a href="#menu5" class="list-group-item d-inline-block collapsed ${activePage.person} " data-toggle="collapse"
                        aria-expanded="false">
                        <i class="fas fa-user-alt"></i>
                        <span class="d-none d-md-inline">
                            Person Master
                        </span>
                    </a>
                    <div class="collapse" id="menu5" data-parent="#sidebar">

                        <a href="./person-category.html" class="list-group-item" data-parent="#menu5">
                            Person Category
                        </a>
                        <a href="./person.html" class="list-group-item" data-parent="#menu5">
                            Person
                        </a>
                    </div>
                    <a href="#menu6" class="list-group-item d-inline-block collapsed ${activePage.gallery}" data-toggle="collapse"
                        aria-expanded="false">
                        <i class="fas fa-images"></i>
                        <span class="d-none d-md-inline">
                                Gallery Master
                        </span>
                    </a>
                    <div class="collapse" id="menu6" data-parent="#sidebar">

                        <a href="./gallery-category.html" class="list-group-item" data-parent="#menu6">
                            Gallery Category
                        </a>
                        <a href="./gallery.html" class="list-group-item" data-parent="#menu6">
                            Gallery
                        </a>
                    </div>
                </div>`;


document.getElementById('sidebar').innerHTML  = sidenav;