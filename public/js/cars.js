const api = axios.create({
  baseURL: "http://localhost:8000",
});

let name = document.getElementById("name");
let price = document.getElementById("price");
let photo = document.getElementById("photo");
let update_at = document.getElementById("update_at");

function showListofCars(cars) {
  let listCar = "";
  for (let i in Cars) {
    listCar += `<div class="col-lg-4 d-flex justify-content-center ">
  <div class="card" style="width: 25rem;margin-top: 10px;">
      <div class="card-body">
          <div class="row">
              <div class="col-lg-12 d-flex justify-content-center">
                  <img src=${Cars[i].photo} alt=${Cars[i].photo} width="100%" height="100%">
              </div>
          </div>
          <div class="row">
              <div class="col-lg-12">
                  <p>${Cars[i].name}</p>
              </div>
          </div>
          <div class="row">
              <div class="col-lg-12">
                  <p><b>Rp ${Cars[i].price}</b></p>
              </div>
          </div>
          <div class="row">
              <div class="col-lg-12">
                  <p><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M9.99984 18.3333C14.6022 18.3333 18.3332 14.6023 18.3332 9.99996C18.3332 5.39759 14.6022 1.66663 9.99984 1.66663C5.39746 1.66663 1.6665 5.39759 1.6665 9.99996C1.6665 14.6023 5.39746 18.3333 9.99984 18.3333Z"
                              stroke="#8A8A8A" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M10 5V10L13.3333 11.6667" stroke="#8A8A8A" stroke-linecap="round"
                              stroke-linejoin="round" />
                      </svg>
                      ${Cars[i].updatedAt}
                  </p>
              </div>
          </div>
          <div class="row">
              <div class="col-lg-6 d-flex justify-content-center">
                  <button id="delete" type="button" class="btn btn-outline-danger" style="width :100%;padding: 10%;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor"
                          class="bi bi-trash" viewBox="0 0 16 16">
                          <path
                              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path fill-rule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                      </svg>Delete</button>
              </div>
              <div class="col-lg-6 d-flex justify-content-center">
                  <a href="/form/${Cars[i].id}" class="btn btn-success" style="width :100%;padding: 10%;">
                      <svg xmlns=" http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor"
                          class="bi bi-pencil-square" viewBox="0 0 16 16">
                          <path
                              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                      </svg> Edit</a>
              </div>
          </div>
      </div>
  </div>
</div>`;
  }

  let listCars = document.querySelector(".listcars");
  listCars.innerHTML = listCar;
}

let deleteData = document.getElementById("delete");

deleteData.onclick = function (e) {
  e.preventDefault();
  deleteCar();
};

function deleteCar() {
  api.delete("/api/v1/cars/:id");
}

function getCars() {
  api
    .get("/api/v1/cars")
    .then((result) => {
      showListofCars(result.data);
    })
    .catch(() => {
      throw new Error("something error");
    });
}
