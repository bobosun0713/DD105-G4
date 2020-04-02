// ======== 呼叫函式
function memberstatus() {
    $(".switch-input").click(function() {
        var memNo = $(this).attr("psn")
        // alert(memno)
        $.ajax({
            url: "./php/backend_member_status.php",
            type: "post",
            data: {
                mem_no: memNo,
            },
            success: function(data) {
                alert("修改成功")
            },
            error: function() {
                alert("修改失敗")
            },
        })
    })
}

function deletemember() {
    $(".btn").click(function() {
        var memDelete = $(this).attr("psn")
        $.ajax({
            url: "./php/backend_member_delete.php",
            type: "post",
            data: {
                mem_no: memDelete,
            },
            success: function(data) {
                alert("修改成功")
            },
            error: function() {
                alert("修改失敗")
            },
        })
    })
}

function status() {
    $.ajax({
        url: "./php/backend_member.php",
        type: "GET",
        dataType: "json",
        success: function(data) {
            var admin = $("#admin_status_hidden").val()
            let html = ""
            if (admin == 1) {
                for (i = 0; i < data.length; i++) {
                    if (data[i].mem_status == 1) {
                        html += `
                        <tr>
                        <td>${data[i].mem_no}</td>
                        <td><img src="./img/login/${data[i].mem_img}" style="width:50px; height:50px; object-fit: cover; border-radius:100%;"></td>
                        <td>${data[i].mem_name}</td>
                        <td>${data[i].mem_id}</td>
                        <td>${data[i].mem_psw}</td>
                        <td>${data[i].mem_tel}</td>
                        <td>${data[i].mem_mail}</td>
                        <td >
                            <label class="noAuthority switch switch-3d switch-success">
                            <input type="checkbox" class="switch-input" psn="${data[i].mem_no}" checked disabled>
                            <span class="switch-slider"></span>
                            </label>
                        </td>
                        <td>
                        <button type="button" class="btn btn-secondary btn-danger" data-dismiss="modal" psn="${data[i].mem_no}" disabled>刪除</button>
                        </td>
                        </tr>
                        `
                    } else {
                        html += `
                            <tr>
                            <td>${data[i].mem_no}</td>
                            <td><img src="./img/login/${data[i].mem_img}" style="width:50px; height:50px; object-fit: cover; border-radius:100%;"></td>
                            <td>${data[i].mem_name}</td>
                            <td>${data[i].mem_id}</td>
                            <td>${data[i].mem_psw}</td>
                            <td>${data[i].mem_tel}</td>
                            <td>${data[i].mem_mail}</td>
                            <td >
                                <label class="noAuthority switch switch-3d switch-success">
                                <input type="checkbox" class="switch-input" psn="${data[i].mem_no}" disabled>
                                <span class="switch-slider"></span>
                                </label>
                            </td>
                            <td>
                            <button type="button" class="btn btn-secondary btn-danger" data-dismiss="modal" psn="${data[i].mem_no}" disabled>刪除</button>
                            </td>
                            </tr>
                            `
                    }
                }
            } else {
                for (i = 0; i < data.length; i++) {
                    if (data[i].mem_status == 1) {
                        html += `
                        <tr>
                        <td>${data[i].mem_no}</td>
                        <td><img src="./img/login/${data[i].mem_img}" style="width:50px; height:50px; object-fit: cover; border-radius:100%;"></td>
                        <td>${data[i].mem_name}</td>
                        <td>${data[i].mem_id}</td>
                        <td>${data[i].mem_psw}</td>
                        <td>${data[i].mem_tel}</td>
                        <td>${data[i].mem_mail}</td>
                        <td >
                            <label class="noAuthority switch switch-3d switch-success">
                            <input type="checkbox" class="switch-input" psn="${data[i].mem_no}" checked>
                            <span class="switch-slider"></span>
                            </label>
                        </td>
                        <td>
                        <button type="button" class="btn btn-secondary btn-danger" data-dismiss="modal" psn="${data[i].mem_no}">刪除</button>
                        </td>
                        </tr>
                        `
                    } else {
                        html += `
                            <tr>
                            <td>${data[i].mem_no}</td>
                            <td><img src="./img/login/${data[i].mem_img}" style="width:50px; height:50px; object-fit: cover; border-radius:100%;"></td>
                            <td>${data[i].mem_name}</td>
                            <td>${data[i].mem_id}</td>
                            <td>${data[i].mem_psw}</td>
                            <td>${data[i].mem_tel}</td>
                            <td>${data[i].mem_mail}</td>
                            <td >
                                <label class="noAuthority switch switch-3d switch-success">
                                <input type="checkbox" class="switch-input" psn="${data[i].mem_no}">
                                <span class="switch-slider"></span>
                                </label>
                            </td>
                            <td>
                            <button type="button" class="btn btn-secondary btn-danger" data-dismiss="modal" psn="${data[i].mem_no}">刪除</button>
                            </td>
                            </tr>
                            `
                    }
                }
            }
            $(".backmember").empty()
            $(".backmember").append(html)
            // 修改會員狀態
            memberstatus()
            // 刪除會員帳號
            deletemember()
        },
    })
}
