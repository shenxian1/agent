$(function () {
    // 导航栏
    $('.nav-pills').find('a').each(function () {
        if (this.href == document.location.href || document.location.href.search(this.href) >= 0) {
            $(this).parent().addClass('active'); // this.className = 'active';
        }
    });
    // 跳转
    $('#my .my-con .mycon-left .mycon-name  button').click(function () {
        $(this).parent('.mycon-name').parent('.mycon-left').parent('.my-con').hide();
        $(this).parent('.mycon-name').parent('.mycon-left').parent('.my-con').parent('#my').children('form').show();
    })


    // 企业认证
    $('#company .company-con .company-bot .bot-right form .form-group .btn').click(function(){
        $('#company .company-con').hide();
        $('#company .qi').show();
    })


    // 客户列表
    $('#mytable').SetEditable({
        $addButton: $('#add')
    });
    $('#mytable2').SetEditable2({
        $addButton: $('#add2')
    });
    $('#mytable3').SetEditable3({
        $addButton: $('#add3')
    });

    // wer
    $('.wer').on('click',function(){
        $('#chongzhi').show();
        $('#chongzhi form').show();
        $('.erweima').hide();

    });


    $('#chongzhi .modal-dialog .modal-content .modal-body form .btn').click(function(){

        $(this).parent('.form-group').parent('form').css('display','none');
        // $(this).parent('.form-group').parent('form').css('display','');
        $(this).parent('.form-group').parent('form').next('.erweima').css('display','block');
        // $(this).parent('.form-group').parent('form').next('.erweima').css('display','');
    })
    
    // acticle
    // $('#acticle form  .btn').click(function () {
    //     $('#acticle form').hide();
    //     $('#acticle .content').show();
    // })
    // $('#acticle .content .edit').click(function () {
    //     $('#acticle .content').hide();
    //     $('#acticle form').show();
    // })
    $('#acticle .content .more').click(function () {
        $('#acticle .content').hide();
        $('#acticle .content-more').show();
    })
    // $('#acticle .content-more .edit').click(function () {
    //     $('#acticle .content-more').hide();
    //     $('#acticle form').show();
    // })


    // 初始化


    // 验证
    $('form').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                message: '用户名验证失败',
                validators: {
                    notEmpty: {
                        message: '昵称不能为空'
                    },
                    stringLength: {
                        min: 4,
                        max: 18,
                        message: '昵称长度必须在4位以上'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z\u4e00-\u9fa5]+$/,
                        message: '只能输入汉字和字母'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: '邮箱不能为空'
                    },
                    regexp: {
                        regexp: /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/,
                        message: '邮箱格式不正确'
                    }
                }
            },
            qq: {
                validators: {
                    notEmpty: {
                        message: 'qq不能为空'
                    },
                    regexp: {
                        regexp: /^[1-9][0-9]{4,14}$/,
                        message: 'qq格式不正确，只能输入数字'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: '联系电话不能为空'
                    },
                    stringLength: {
                        min: 11,
                        max: 11,
                        message: '电话长度必须是11位'
                    },
                    regexp: {
                        regexp: /^[1][3,4,5,7,8][0-9]{9}$/,
                        message: '联系电话格式不正确，只能输入数字'
                    }
                }
            },
            name: {
                validators: {
                    notEmpty: {
                        message: '姓名不能为空'
                    },
                    stringLength: {
                        min: 1,
                        max: 4,
                        message: '姓名长度必须在2到4个汉字'
                    },
                    regexp: {
                        regexp: /^[\u2E80-\u9FFF]+$/,
                        message: '真实姓名只能输入汉字'
                    }
                }
            },
            creditCard: {
                validators: {
                    notEmpty: {
                        message: '身份证号不能为空'
                    },
                    stringLength: {
                        min: 18,
                        max: 18,
                        message: '身份证号必须是18位数字'
                    },
                    regexp: {
                        regexp: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
                        message: '请输入正确的身份证号码'
                    }
                }
            },
            code: {
                validators: {
                    notEmpty: {
                        message: '组织机构代码不能为空'
                    }
                }
            },
            office: {
                validators: {
                    notEmpty: {
                        message: '办公地址不能为空'
                    }
                }
            },
            operate: {
                validators: {
                    notEmpty: {
                        message: '经营地址不能为空'
                    }
                }
            },
            open: {
                validators: {
                    notEmpty: {
                        message: '银行开户许可证不能为空'
                    }
                }
            },
            present_password: {
                validators: {
                    notEmpty: {
                        message: '请输入当前密码'
                    },
                    stringLength: {
                        min: 6,
                        max: 16,
                        message: '密码长度6-16个字符，区分大小写'
                    },
                    regexp: {
                        regexp: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,16}$/,
                        message: '密码由大写字母+小写字母+数字，6-16位组成'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '请输入新密码'
                    },
                    different: { //比较
                        field: 'present_password', //需要进行比较的input name值
                        message: '密码不能与当前密码相同'
                    }
                }
            },
            confirm_password: {
                validators: {
                    notEmpty: {
                        message: '请再次输入密码'
                    },
                    identical: { //比较是否相同
                        field: 'password', //需要进行比较的input name值
                        message: '两次密码输入不一致'
                    }
                }
            },
            customer_name: {
                validators: {
                    notEmpty: {
                        message: '客户名称不能为空'
                    }
                }
            },
            contact_name: {
                validators: {
                    notEmpty: {
                        message: '联系人姓名不能为空'
                    }
                }
            },
            contact_address: {
                validators: {
                    notEmpty: {
                        message: '联系人姓名不能为空'
                    }
                }
            },
            datetime: {
                validators: {
                    notEmpty: {
                        message: '请输入日期'
                    },
                    regexp: {
                        regexp: /((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)$))/,
                        message: '日期格式不正确，格式必须为有效的yyyy-mm-dd'
                    }
                }
            },
            money: {
                validators: {
                    notEmpty: {
                        message: '请输入充值金额'
                    },
                    regexp: {
                        regexp: /^[1-9]\d{2,}$/,                 
                        message: '充值金额必须在1~100元'
                    }
                }
            }

        }
    });

})


//图片上传预览    IE是用了滤镜。
function previewImage(file) {
    var MAXWIDTH = 90;
    var MAXHEIGHT = 90;
    var div = document.getElementById('preview');
    if (file.files && file.files[0]) {
        div.innerHTML = '<img id=imghead onclick=$("#previewImg").click()>';
        var img = document.getElementById('imghead');
        img.onload = function () {
            var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
            img.width = rect.width;
            img.height = rect.height;
            //                 img.style.marginLeft = rect.left+'px';
            img.style.marginTop = rect.top + 'px';
        }
        var reader = new FileReader();
        reader.onload = function (evt) {
            img.src = evt.target.result;
        }
        reader.readAsDataURL(file.files[0]);
    } else //兼容IE
    {
        var sFilter = 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
        file.select();
        var src = document.selection.createRange().text;
        div.innerHTML = '<img id=imghead>';
        var img = document.getElementById('imghead');
        img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
        var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
        status = ('rect:' + rect.top + ',' + rect.left + ',' + rect.width + ',' + rect.height);
        div.innerHTML = "<div id=divhead style='width:" + rect.width + "px;height:" + rect.height +
            "px;margin-top:" + rect.top + "px;" + sFilter + src + "\"'></div>";
    }
}

function clacImgZoomParam(maxWidth, maxHeight, width, height) {
    var param = {
        top: 0,
        left: 0,
        width: width,
        height: height
    };
    if (width > maxWidth || height > maxHeight) {
        rateWidth = width / maxWidth;
        rateHeight = height / maxHeight;

        if (rateWidth > rateHeight) {
            param.width = maxWidth;
            param.height = Math.round(height / rateWidth);
        } else {
            param.width = Math.round(width / rateHeight);
            param.height = maxHeight;
        }
    }
    param.left = Math.round((maxWidth - param.width) / 2);
    param.top = Math.round((maxHeight - param.height) / 2);
    return param;
}






//  客户列表

/*
Bootstable
 @description  Javascript library to make HMTL tables editable, using Bootstrap
 @version 1.1
 @autor Tito Hinostroza
*/
"use strict";
//Global variables
var params = null; //Parameters
var colsEdi = null;
var newColHtml = '<div class="btn-group pull-right">' +
    '<button id="bEdit" type="button" class="btn btn-sm btn-default" onclick="rowEdit(this);">' +
    '<span class="glyphicon glyphicon-pencil" > </span>' +
    '</button>' +
    '<button id="bElim" type="button" class="btn btn-sm btn-default" onclick="rowElim(this);">' +
    '<span class="glyphicon glyphicon-trash" > </span>' +
    '</button>' +
    '<button id="bAcep" type="button" class="btn btn-sm btn-default" style="display:none;" onclick="rowAcep(this);">' +
    '<span class="glyphicon glyphicon-ok" > </span>' +
    '</button>' +
    '<button id="bCanc" type="button" class="btn btn-sm btn-default" style="display:none;" onclick="rowCancel(this);">' +
    '<span class="glyphicon glyphicon-remove" > </span>' +
    '</button>' +
    '</div>';
var colEdicHtml = '<td name="buttons">' + newColHtml + '</td>';

$.fn.SetEditable = function (options) {
    var defaults = {
        columnsEd: null, //Index to editable columns. If null all td editables. Ex.: "1,2,3,4,5"
        $addButton: null, //Jquery object of "Add" button
        onEdit: function () {}, //Called after edition
        onBeforeDelete: function () {}, //Called before deletion
        onDelete: function () {}, //Called after deletion
        onAdd: function () {} //Called when added a new row
    };
    params = $.extend(defaults, options);
    // this.find('thead tr').append('<th name="buttons"></th>'); //encabezado vacío
    this.find('tbody tr').append(colEdicHtml);
    var $tabedi = this; //Read reference to the current table, to resolve "this" here.
    //Process "addButton" parameter
    if (params.$addButton != null) {
        //Se proporcionó parámetro
        params.$addButton.click(function () {
            rowAddNew($tabedi.attr("id"));
        });
    }
    //Process "columnsEd" parameter
    if (params.columnsEd != null) {
        //Extract felds
        colsEdi = params.columnsEd.split(',');
    }
};

function IterarCamposEdit($cols, tarea) {
    //Itera por los campos editables de una fila
    var n = 0;
    $cols.each(function () {
        n++;
        if ($(this).attr('name') == 'buttons') return; //excluye columna de botones
        if (!EsEditable(n - 1)) return; //noe s campo editable
        tarea($(this));
    });

    function EsEditable(idx) {
        //Indica si la columna pasada está configurada para ser editable
        if (colsEdi == null) { //no se definió
            return true; //todas son editable
        } else { //hay filtro de campos
            //alert('verificando: ' + idx);
            for (var i = 0; i < colsEdi.length; i++) {
                if (idx == colsEdi[i]) return true;
            }
            return false; //no se encontró
        }
    }
}

function FijModoNormal(but) {
    $(but).parent().find('#bAcep').hide();
    $(but).parent().find('#bCanc').hide();
    $(but).parent().find('#bEdit').show();
    $(but).parent().find('#bElim').show();
    var $row = $(but).parents('tr'); //accede a la fila
    $row.attr('id', ''); //quita marca
}

function FijModoEdit(but) {
    $(but).parent().find('#bAcep').show();
    $(but).parent().find('#bCanc').show();
    $(but).parent().find('#bEdit').hide();
    $(but).parent().find('#bElim').hide();
    var $row = $(but).parents('tr'); //accede a la fila
    $row.attr('id', 'editing'); //indica que está en edición
}

function ModoEdicion($row) {
    if ($row.attr('id') == 'editing') {
        return true;
    } else {
        return false;
    }
}

function rowAcep(but) {
    //Acepta los cambios de la edición
    var $row = $(but).parents('tr'); //accede a la fila
    var $cols = $row.find('td'); //lee campos
    if (!ModoEdicion($row)) return; //Ya está en edición
    //Está en edición. Hay que finalizar la edición
    IterarCamposEdit($cols, function ($td) { //itera por la columnas
        var cont = $td.find('input').val(); //lee contenido del input
        $td.html(cont); //fija contenido y elimina controles
    });
    FijModoNormal(but);
    params.onEdit($row);
}

function rowCancel(but) {
    //Rechaza los cambios de la edición
    var $row = $(but).parents('tr'); //accede a la fila
    var $cols = $row.find('td'); //lee campos
    if (!ModoEdicion($row)) return; //Ya está en edición
    //Está en edición. Hay que finalizar la edición
    IterarCamposEdit($cols, function ($td) { //itera por la columnas
        var cont = $td.find('div').html(); //lee contenido del div
        $td.html(cont); //fija contenido y elimina controles
    });
    FijModoNormal(but);
}

function rowEdit(but) { //Inicia la edición de una fila
    var $row = $(but).parents('tr'); //accede a la fila
    var $cols = $row.find('td'); //lee campos
    if (ModoEdicion($row)) return; //Ya está en edición
    //Pone en modo de edición
    IterarCamposEdit($cols, function ($td) { //itera por la columnas
        var cont = $td.html(); //lee contenido
        var div = '<div style="display: none;">' + cont + '</div>'; //guarda contenido
        var input = '<input class="form-control input-sm"  value="' + cont + '">';
        $td.html(div + input); //fija contenido
    });
    FijModoEdit(but);
}

function rowElim(but) { //Elimina la fila actual
    var $row = $(but).parents('tr'); //accede a la fila
    params.onBeforeDelete($row);
    $row.remove();
    params.onDelete();
}

function rowAddNew(tabId) { //Agrega fila a la tabla indicada.
    var $tab_en_edic = $("#" + tabId); //Table to edit
    var $filas = $tab_en_edic.find('tbody tr');
    if ($filas.length == 0) {
        //No hay filas de datos. Hay que crearlas completas
        var $row = $tab_en_edic.find('thead tr'); //encabezado
        var $cols = $row.find('th'); //lee campos
        //construye html
        var htmlDat = '';
        $cols.each(function () {
            if ($(this).attr('name') == 'buttons') {
                //Es columna de botones
                htmlDat = htmlDat + colEdicHtml; //agrega botones
            } else {
                htmlDat = htmlDat + '<td></td>';
            }
        });
        $tab_en_edic.find('tbody').append('<tr>' + htmlDat + '</tr>');
    } else {
        //Hay otras filas, podemos clonar la última fila, para copiar los botones
        var $ultFila = $tab_en_edic.find('tr:last');
        $ultFila.clone().appendTo($ultFila.parent());
        $ultFila = $tab_en_edic.find('tr:last');
        var $cols = $ultFila.find('td'); //lee campos
        $cols.each(function () {
            if ($(this).attr('name') == 'buttons') {
                //Es columna de botones
            } else {
                $(this).html(''); //limpia contenido
            }
        });
    }
    params.onAdd();
}

function TableToCSV(tabId, separator) { //Convierte tabla a CSV
    var datFil = '';
    var tmp = '';
    var $tab_en_edic = $("#" + tabId); //Table source
    $tab_en_edic.find('tbody tr').each(function () {
        //Termina la edición si es que existe
        if (ModoEdicion($(this))) {
            $(this).find('#bAcep').click(); //acepta edición
        }
        var $cols = $(this).find('td'); //lee campos
        datFil = '';
        $cols.each(function () {
            if ($(this).attr('name') == 'buttons') {
                //Es columna de botones
            } else {
                datFil = datFil + $(this).html() + separator;
            }
        });
        if (datFil != '') {
            datFil = datFil.substr(0, datFil.length - separator.length);
        }
        tmp = tmp + datFil + '\n';
    });
    return tmp;
}




//  客户列表

/*
Bootstable
 @description  Javascript library to make HMTL tables editable, using Bootstrap
 @version 1.1
 @autor Tito Hinostroza
*/


$.fn.SetEditable2 = function (options) {


    "use strict";
//Global variables
var params = null; //Parameters
var colsEdi = null;
var newColHtml = '<div class="btn-group pull-right">' +
    '<button id="bEdit" type="button" class="btn btn-sm btn-default" onclick="rowEdit(this);">' +
    '<span> 编辑</span>' +
    '</button>' +
    '<button id="bElim" type="button" class="btn btn-sm btn-default">' +
    '<span > 提交 </span>' +
    '</button>' +
    '<button id="bAcep" type="button" class="btn btn-sm btn-default" style="display:none;" onclick="rowAcep(this);">' +
    '<span class="glyphicon glyphicon-ok" > </span>' +
    '</button>' +
    '<button id="bCanc" type="button" class="btn btn-sm btn-default" style="display:none;" onclick="rowCancel(this);">' +
    '<span class="glyphicon glyphicon-remove" > </span>' +
    '</button>' +
    '</div>';
var colEdicHtml = '<td name="buttons">' + newColHtml + '</td>';
    var defaults = {
        columnsEd: null, //Index to editable columns. If null all td editables. Ex.: "1,2,3,4,5"
        $addButton: null, //Jquery object of "Add" button
        onEdit: function () {}, //Called after edition
        onBeforeDelete: function () {}, //Called before deletion
        onDelete: function () {}, //Called after deletion
        onAdd: function () {} //Called when added a new row
    };
    params = $.extend(defaults, options);
    // this.find('thead tr').append('<th name="buttons"></th>'); //encabezado vacío
    this.find('tbody tr').append(colEdicHtml);
    var $tabedi = this; //Read reference to the current table, to resolve "this" here.
    //Process "addButton" parameter
    if (params.$addButton != null) {
        //Se proporcionó parámetro
        params.$addButton.click(function () {
            rowAddNew($tabedi.attr("id"));
        });
    }
    //Process "columnsEd" parameter
    if (params.columnsEd != null) {
        //Extract felds
        colsEdi = params.columnsEd.split(',');
    }
};

function IterarCamposEdit($cols, tarea) {
    //Itera por los campos editables de una fila
    var n = 0;
    $cols.each(function () {
        n++;
        if ($(this).attr('name') == 'buttons') return; //excluye columna de botones
        if (!EsEditable(n - 1)) return; //noe s campo editable
        tarea($(this));
    });

    function EsEditable(idx) {
        //Indica si la columna pasada está configurada para ser editable
        if (colsEdi == null) { //no se definió
            return true; //todas son editable
        } else { //hay filtro de campos
            //alert('verificando: ' + idx);
            for (var i = 0; i < colsEdi.length; i++) {
                if (idx == colsEdi[i]) return true;
            }
            return false; //no se encontró
        }
    }
}

function FijModoNormal(but) {
    $(but).parent().find('#bAcep').hide();
    $(but).parent().find('#bCanc').hide();
    $(but).parent().find('#bEdit').show();
    $(but).parent().find('#bElim').show();
    var $row = $(but).parents('tr'); //accede a la fila
    $row.attr('id', ''); //quita marca
}

function FijModoEdit(but) {
    $(but).parent().find('#bAcep').show();
    $(but).parent().find('#bCanc').show();
    $(but).parent().find('#bEdit').hide();
    $(but).parent().find('#bElim').hide();
    var $row = $(but).parents('tr'); //accede a la fila
    $row.attr('id', 'editing'); //indica que está en edición
}

function ModoEdicion($row) {
    if ($row.attr('id') == 'editing') {
        return true;
    } else {
        return false;
    }
}

function rowAcep(but) {
    //Acepta los cambios de la edición
    var $row = $(but).parents('tr'); //accede a la fila
    var $cols = $row.find('td'); //lee campos
    if (!ModoEdicion($row)) return; //Ya está en edición
    //Está en edición. Hay que finalizar la edición
    IterarCamposEdit($cols, function ($td) { //itera por la columnas
        var cont = $td.find('input').val(); //lee contenido del input
        $td.html(cont); //fija contenido y elimina controles
    });
    FijModoNormal(but);
    params.onEdit($row);
}

function rowCancel(but) {
    //Rechaza los cambios de la edición
    var $row = $(but).parents('tr'); //accede a la fila
    var $cols = $row.find('td'); //lee campos
    if (!ModoEdicion($row)) return; //Ya está en edición
    //Está en edición. Hay que finalizar la edición
    IterarCamposEdit($cols, function ($td) { //itera por la columnas
        var cont = $td.find('div').html(); //lee contenido del div
        $td.html(cont); //fija contenido y elimina controles
    });
    FijModoNormal(but);
}

function rowEdit(but) { //Inicia la edición de una fila
    var $row = $(but).parents('tr'); //accede a la fila
    var $cols = $row.find('td'); //lee campos
    if (ModoEdicion($row)) return; //Ya está en edición
    //Pone en modo de edición
    IterarCamposEdit($cols, function ($td) { //itera por la columnas
        var cont = $td.html(); //lee contenido
        var div = '<div style="display: none;">' + cont + '</div>'; //guarda contenido
        var input = '<input class="form-control input-sm"  value="' + cont + '">';
        $td.html(div + input); //fija contenido
    });
    FijModoEdit(but);
}

function rowElim(but) { //Elimina la fila actual
    var $row = $(but).parents('tr'); //accede a la fila
    params.onBeforeDelete($row);
    $row.remove();
    params.onDelete();
}

function rowAddNew(tabId) { //Agrega fila a la tabla indicada.
    var $tab_en_edic = $("#" + tabId); //Table to edit
    var $filas = $tab_en_edic.find('tbody tr');
    if ($filas.length == 0) {
        //No hay filas de datos. Hay que crearlas completas
        var $row = $tab_en_edic.find('thead tr'); //encabezado
        var $cols = $row.find('th'); //lee campos
        //construye html
        var htmlDat = '';
        $cols.each(function () {
            if ($(this).attr('name') == 'buttons') {
                //Es columna de botones
                htmlDat = htmlDat + colEdicHtml; //agrega botones
            } else {
                htmlDat = htmlDat + '<td></td>';
            }
        });
        $tab_en_edic.find('tbody').append('<tr>' + htmlDat + '</tr>');
    } else {
        //Hay otras filas, podemos clonar la última fila, para copiar los botones
        var $ultFila = $tab_en_edic.find('tr:last');
        $ultFila.clone().appendTo($ultFila.parent());
        $ultFila = $tab_en_edic.find('tr:last');
        var $cols = $ultFila.find('td'); //lee campos
        $cols.each(function () {
            if ($(this).attr('name') == 'buttons') {
                //Es columna de botones
            } else {
                $(this).html(''); //limpia contenido
            }
        });
    }
    params.onAdd();
}

function TableToCSV(tabId, separator) { //Convierte tabla a CSV
    var datFil = '';
    var tmp = '';
    var $tab_en_edic = $("#" + tabId); //Table source
    $tab_en_edic.find('tbody tr').each(function () {
        //Termina la edición si es que existe
        if (ModoEdicion($(this))) {
            $(this).find('#bAcep').click(); //acepta edición
        }
        var $cols = $(this).find('td'); //lee campos
        datFil = '';
        $cols.each(function () {
            if ($(this).attr('name') == 'buttons') {
                //Es columna de botones
            } else {
                datFil = datFil + $(this).html() + separator;
            }
        });
        if (datFil != '') {
            datFil = datFil.substr(0, datFil.length - separator.length);
        }
        tmp = tmp + datFil + '\n';
    });
    return tmp;
}


//  客户列表

/*
Bootstable
 @description  Javascript library to make HMTL tables editable, using Bootstrap
 @version 1.1
 @autor Tito Hinostroza
*/


$.fn.SetEditable3 = function (options) {


    "use strict";
//Global variables
var params = null; //Parameters
var colsEdi = null;
var newColHtml = '<div class="btn-group pull-right">' +
    '<button style="background:none;border:none;color:#ff5a00;"id="bEdit" type="button" class="btn btn-sm btn-default" onclick="rowEdit(this);">' +
    '<span> 编辑</span>' +
    '</button>' +
    '<button style="background:none;border:none;color:#ff5a00;" id="bElim" type="button" class="btn btn-sm btn-default">' +
    '<span > 启用 </span>' +
    '</button>' +
    '<button style="background:none;border:none;color:#ff5a00;" id="bElim" type="button" class="btn btn-sm btn-default" onclick="rowElim(this);">' +
    '<span> 删除 </span>' +
    '</button>' +
    '<button id="bAcep" type="button" class="btn btn-sm btn-default" style="display:none;" onclick="rowAcep(this);">' +
    '<span class="glyphicon glyphicon-ok" > </span>' +
    '</button>' +
    '<button id="bCanc" type="button" class="btn btn-sm btn-default" style="display:none;" onclick="rowCancel(this);">' +
    '<span class="glyphicon glyphicon-remove" > </span>' +
    '</button>' +
    '</div>';
var colEdicHtml = '<td name="buttons">' + newColHtml + '</td>';
    var defaults = {
        columnsEd: null, //Index to editable columns. If null all td editables. Ex.: "1,2,3,4,5"
        $addButton: null, //Jquery object of "Add" button
        onEdit: function () {}, //Called after edition
        onBeforeDelete: function () {}, //Called before deletion
        onDelete: function () {}, //Called after deletion
        onAdd: function () {} //Called when added a new row
    };
    params = $.extend(defaults, options);
    // this.find('thead tr').append('<th name="buttons"></th>'); //encabezado vacío
    this.find('tbody tr').append(colEdicHtml);
    var $tabedi = this; //Read reference to the current table, to resolve "this" here.
    //Process "addButton" parameter
    if (params.$addButton != null) {
        //Se proporcionó parámetro
        params.$addButton.click(function () {
            rowAddNew($tabedi.attr("id"));
        });
    }
    //Process "columnsEd" parameter
    if (params.columnsEd != null) {
        //Extract felds
        colsEdi = params.columnsEd.split(',');
    }
};

function IterarCamposEdit($cols, tarea) {
    //Itera por los campos editables de una fila
    var n = 0;
    $cols.each(function () {
        n++;
        if ($(this).attr('name') == 'buttons') return; //excluye columna de botones
        if (!EsEditable(n - 1)) return; //noe s campo editable
        tarea($(this));
    });

    function EsEditable(idx) {
        //Indica si la columna pasada está configurada para ser editable
        if (colsEdi == null) { //no se definió
            return true; //todas son editable
        } else { //hay filtro de campos
            //alert('verificando: ' + idx);
            for (var i = 0; i < colsEdi.length; i++) {
                if (idx == colsEdi[i]) return true;
            }
            return false; //no se encontró
        }
    }
}

function FijModoNormal(but) {
    $(but).parent().find('#bAcep').hide();
    $(but).parent().find('#bCanc').hide();
    $(but).parent().find('#bEdit').show();
    $(but).parent().find('#bElim').show();
    var $row = $(but).parents('tr'); //accede a la fila
    $row.attr('id', ''); //quita marca
}

function FijModoEdit(but) {
    $(but).parent().find('#bAcep').show();
    $(but).parent().find('#bCanc').show();
    $(but).parent().find('#bEdit').hide();
    $(but).parent().find('#bElim').hide();
    var $row = $(but).parents('tr'); //accede a la fila
    $row.attr('id', 'editing'); //indica que está en edición
}

function ModoEdicion($row) {
    if ($row.attr('id') == 'editing') {
        return true;
    } else {
        return false;
    }
}

function rowAcep(but) {
    //Acepta los cambios de la edición
    var $row = $(but).parents('tr'); //accede a la fila
    var $cols = $row.find('td'); //lee campos
    if (!ModoEdicion($row)) return; //Ya está en edición
    //Está en edición. Hay que finalizar la edición
    IterarCamposEdit($cols, function ($td) { //itera por la columnas
        var cont = $td.find('input').val(); //lee contenido del input
        $td.html(cont); //fija contenido y elimina controles
    });
    FijModoNormal(but);
    params.onEdit($row);
}

function rowCancel(but) {
    //Rechaza los cambios de la edición
    var $row = $(but).parents('tr'); //accede a la fila
    var $cols = $row.find('td'); //lee campos
    if (!ModoEdicion($row)) return; //Ya está en edición
    //Está en edición. Hay que finalizar la edición
    IterarCamposEdit($cols, function ($td) { //itera por la columnas
        var cont = $td.find('div').html(); //lee contenido del div
        $td.html(cont); //fija contenido y elimina controles
    });
    FijModoNormal(but);
}

function rowEdit(but) { //Inicia la edición de una fila
    var $row = $(but).parents('tr'); //accede a la fila
    var $cols = $row.find('td'); //lee campos
    if (ModoEdicion($row)) return; //Ya está en edición
    //Pone en modo de edición
    IterarCamposEdit($cols, function ($td) { //itera por la columnas
        var cont = $td.html(); //lee contenido
        var div = '<div style="display: none;">' + cont + '</div>'; //guarda contenido
        var input = '<input class="form-control input-sm"  value="' + cont + '">';
        $td.html(div + input); //fija contenido
    });
    FijModoEdit(but);
}

function rowElim(but) { //Elimina la fila actual
    var $row = $(but).parents('tr'); //accede a la fila
    params.onBeforeDelete($row);
    $row.remove();
    params.onDelete();
}

function rowAddNew(tabId) { //Agrega fila a la tabla indicada.
    var $tab_en_edic = $("#" + tabId); //Table to edit
    var $filas = $tab_en_edic.find('tbody tr');
    if ($filas.length == 0) {
        //No hay filas de datos. Hay que crearlas completas
        var $row = $tab_en_edic.find('thead tr'); //encabezado
        var $cols = $row.find('th'); //lee campos
        //construye html
        var htmlDat = '';
        $cols.each(function () {
            if ($(this).attr('name') == 'buttons') {
                //Es columna de botones
                htmlDat = htmlDat + colEdicHtml; //agrega botones
            } else {
                htmlDat = htmlDat + '<td></td>';
            }
        });
        $tab_en_edic.find('tbody').append('<tr>' + htmlDat + '</tr>');
    } else {
        //Hay otras filas, podemos clonar la última fila, para copiar los botones
        var $ultFila = $tab_en_edic.find('tr:last');
        $ultFila.clone().appendTo($ultFila.parent());
        $ultFila = $tab_en_edic.find('tr:last');
        var $cols = $ultFila.find('td'); //lee campos
        $cols.each(function () {
            if ($(this).attr('name') == 'buttons') {
                //Es columna de botones
            } else {
                $(this).html(''); //limpia contenido
            }
        });
    }
    params.onAdd();
}

function TableToCSV(tabId, separator) { //Convierte tabla a CSV
    var datFil = '';
    var tmp = '';
    var $tab_en_edic = $("#" + tabId); //Table source
    $tab_en_edic.find('tbody tr').each(function () {
        //Termina la edición si es que existe
        if (ModoEdicion($(this))) {
            $(this).find('#bAcep').click(); //acepta edición
        }
        var $cols = $(this).find('td'); //lee campos
        datFil = '';
        $cols.each(function () {
            if ($(this).attr('name') == 'buttons') {
                //Es columna de botones
            } else {
                datFil = datFil + $(this).html() + separator;
            }
        });
        if (datFil != '') {
            datFil = datFil.substr(0, datFil.length - separator.length);
        }
        tmp = tmp + datFil + '\n';
    });
    return tmp;
}




