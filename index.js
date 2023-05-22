$.ajax({
    method: 'GET',
  url: 'https://www.themealdb.com/api/json/v1/1/categories.php',

 success:function (response){
    var data=response.categories
    console.log(data[0])
    for(let i=0;i<response.categories.length;++i){
        var value=`<div class="card shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem; margin:20px;height:22rem;" >
        <img src="${data[i].strCategoryThumb}" class="card-img-top" alt="..." style="border-radius:10px">
        <div class="card-body">
          <h5 class="card-title text-center">${data[i].strCategory}</h5>
          <p class="card-text">${data[i].strCategoryDescription ? data[i].strCategoryDescription.substring(0,100) : ""}</p>        </div>
      </div>`

      $('#meals').append(value)
    }
// $('#covidtable').DataTable()


   
        },
        failure:function(error){

            console.log("faliure")
        //   alert(response.respnseText)
        }
     
})
