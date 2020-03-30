$(document).ready(function() {
    $.ajax({
        url: "./php/back_forum.php",
        type: "GET",
        dataType: "json",
        success: function(data) {
            let html = ""
            for (i = 0; i < data.length; i++) {
                if (data[i].forum_status == 1) {
                    html += `
                    <tr>
                    <td>${data[i].forum_report_no}</td>
                    <td>${data[i].forum_no}</td>
                    <td>${data[i].forum_title}</td>
                    <td><img src="./php/images/${data[i].images}" style="width:100px"></td>
                    <td>${data[i].mem_name}</td>
                    <td>${data[i].forum_report_reason}</td>
                    <td>
                      <label class="switch switch-3d switch-success">
                          <input class="switch-input question_status modified" type="checkbox" name="question_status" value="1" style="border: 1px solid rgb(204, 204, 204);" checked psn="${data[i].forum_no}">
                          <span class="switch-slider"></span>
                      </label>
                    </td>
                    <td>
                      <button type="button" class="btn btn-secondary btn-danger" data-dismiss="modal" psn="${data[i].forum_report_no}">刪除</button>
  
                    </td>
                    </tr>
                    `
                } else {
                    html += `
                    <tr>
                    <td>${data[i].forum_report_no}</td>
                    <td>${data[i].forum_no}</td>
                    <td>${data[i].forum_title}</td>
                    <td><img src="./php/images/${data[i].images}" style="width:100px"></td>
                    <td>${data[i].mem_name}</td>
                    <td>${data[i].forum_report_reason}</td>
                    <td>
                      <label class="switch switch-3d switch-success">
                          <input class="switch-input question_status modified" type="checkbox" name="question_status" value="1" style="border: 1px solid rgb(204, 204, 204);" psn="${data[i].forum_no}">
                          <span class="switch-slider"></span>
                      </label>
                    </td>
                    <td>
                      <button type="button" class="btn btn-secondary btn-danger" data-dismiss="modal" psn="${data[i].forum_report_no}">刪除</button>
  
                    </td>
                    </tr>
                    `
                }
            }
            $(".forum_report").empty()
            $(".forum_report").append(html)
            // 回傳給文章資料庫
            $(".switch-input").click(function() {
                var status = $(this).attr("psn")
                // alert(status)
                $.ajax({
                    url: "./php/back_forum_status.php",
                    type: "POST",
                    data: {
                        forum_no: status,
                    },
                    success: function(data) {
                        alert("修改成功")
                        location.reload()
                    },
                    error: function() {
                        alert("修改失敗")
                    },
                })
            })
            //當按下刪除並刪除檢舉
            $(".btn").click(function() {
                var replay = $(this).attr("psn")
                // alert(replay)
                $.ajax({
                    url: "./php/back_forum_delete.php",
                    type: "POST",
                    data: {
                        forum_report_no: replay,
                    },
                    success: function(data) {
                        alert("刪除成功")
                        location.reload()
                    },
                    error: function() {
                        alert("修改失敗")
                    },
                })
            })
        },
        error: function(xhr) {
            alert("資料讀取失敗")
        },
    })
})
