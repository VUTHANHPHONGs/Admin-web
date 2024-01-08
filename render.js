function renderStudent () {
    let listStudent = localStorage.getItem("list-student") ? JSON.parse(localStorage.getItem("list-student")) : []
    let student=`<th>STT</th>
               <th>Tên địa điểm</th>
                 <th>Trạng thái</th>
                 <th>Hành động</th>
                  </tr>`
listStudent.map((value, index)=>{
          student += `<tr>
<td>${index + 1}</td>
<td>${value.name}</td>
<td>${value.address}</td>
<td>
bu
</td>
</tr>`
})
}