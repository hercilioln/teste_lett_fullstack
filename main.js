(function(){
const search = document.getElementById("search");
const organization = document.getElementById("organization");
const url = "https://api.github.com/orgs";

async function getOrgs(orgs){
    const orgResponse = await fetch(`${url}/${orgs}`);

    const organization = orgResponse.json();

    return organization
}


function showOrgs(orgs){
    organization.innerHTML = `
    <div class="row">
        <div class="col-md-4">
            <div class="card" style="width: 18rem;">
                <img src="${orgs.avatar_url}" class="card-img-top">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Repositórios: <span class="badge">${orgs.public_repos}</span></li>
                    <li class="list-group-item">Site: <span class="badge">${orgs.name}</span></li>
                </ul>
                <div class="card-body">
                    <a href=""></a>
                </div>
            </div>
        </div>
        <div class="col-md-8">
            <div id="repos"></div>
        </div>
    </div>`;
}


search.addEventListener("keyup", (e) => {
    const orgs = e.target.value;
    
    if(orgs.lenght > 0){
        getOrgs(orgs).then(res => console.log(res))
    }
})




})();

