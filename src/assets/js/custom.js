/*--Footer Year --*/
var currentYear = (new Date()).getFullYear();
$("#footer_year").html(currentYear);
/*--End Footer Year --*/

/*--Input Form --*/
$('.rate_stars input[type="radio"]').change(function(e){
	$('.rating_input').val(this.value);
});

$('.form_datetime').datetimepicker({
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    forceParse: 0,
    format: 'mm-dd-yyyy HH:ii p',
    showMeridian: true,
});

$('.form_date').datetimepicker({
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    minView: 2,
    forceParse: 0,
    pickTime: false,
    format: 'mm-dd-yyyy',
});

$('.form_time').datetimepicker({
    weekStart: 1,
    todayBtn:  0,
    autoclose: 1,
    startView: 1,
    maxView: 1,
    forceParse: 1,
    format: 'HH:ii p',
    pickDate: false,
    showMeridian: true,
}).on('hide', function(ev) {
    $(".datetimepicker .prev").attr("style", "visibility:visible");
    $(".datetimepicker .next").attr("style", "visibility:visible");
    $(".switch").attr("style", "pointer-events: auto");
});
$(".form_time").click(function(){
    $(".datetimepicker .prev").attr("style", "visibility:hidden");
    $(".datetimepicker .next").attr("style", "visibility:hidden");
    $(".switch").attr("style", "pointer-events: none");
});

// $('.select2').select2();

$('#multiselectdropdown').multiselect({
    includeSelectAllOption: true,
    enableFiltering: true
});

var substringMatcher = function(strs) {
    return function findMatches(q, cb) {
      var matches, substringRegex;
      matches = [];
      substrRegex = new RegExp(q, 'i');
      $.each(strs, function(i, str) {
        if (substrRegex.test(str)) {
          matches.push(str);
        }
      });
  
      cb(matches);
    };
  };
  var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
    'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
    'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
    'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  
  $('.autocomplete').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: 'states',
    source: substringMatcher(states)
  });

  var citynames = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: {
      url: 'citynames.json',
      filter: function(list) {
        return $.map(list, function(cityname) {
          return { name: cityname }; });
      }
    }
  });
  citynames.initialize();
  
  $('#tagsinput').tagsinput({
    typeaheadjs: {
      name: 'citynames',
      displayKey: 'name',
      valueKey: 'name',
      source: citynames.ttAdapter()
    }
  });

  $('.file_upload input[type="file"]').change(function(e){
	var fileName = e.target.files[0].name;
	$('.file_upload input[type="text"]').val(fileName);
});

$('#multiupload').imageuploadify();
/*--End Input Form --*/

/*--SideBar --*/
new PerfectScrollbar('.sidebar_box');
$('.sidebar_toggle button').click(function(){
  $('.sidebar_toggle').toggleClass("active");
  $('.sidebar_wrap').toggleClass("small_menu");
  $('.main_block').toggleClass("large_content");
});
/*--End SideBar --*/

/*--Datatable --*/
var table = $('#list_tables').DataTable( {
  //  scrollY: '55vh',
responsive: {
      details: {
          display: $.fn.dataTable.Responsive.display.childRowImmediate,
          type: ''
      }
  },
     scrollCollapse: true,           
       "oLanguage": {
       "sLengthMenu": "_MENU_ Users per Page",
       "sInfo": "Showing _START_ to _END_ of _TOTAL_ Users",
       "sInfoFiltered": "(filtered from _MAX_ total Users)",
       "sInfoEmpty": "Showing 0 to 0 of 0 Users"
       },
       dom: 'lBfrtip',
       buttons: [
           {
           extend: 'excel',
           title: 'Users List',
           exportOptions: {
             columns: [ 0, 1, 2, 3, 4, 5 ]
             }
           },
           {
           extend: 'print',
           title: 'Users List',
           exportOptions: {
             columns: [ 0, 1, 2, 3, 4, 5 ]
             }
           },
         ]
     });
    $( ".buttons-print" ).append( "<i class='fa fa-print'></i>" );
    $('.buttons-print').attr('title', 'Print');
    $( ".buttons-excel" ).append( "<i class='fa fa-file-excel-o'></i>" );
    $('.buttons-excel').attr('title', 'Export to Excel');
/*--End Datatable --*/

/*--SweetLAlert --*/
document.querySelector('.info_swal').onclick = function(){
  swal({
    title: "Are you sure?",
    text: "You will not be able to recover this imaginary file!",
    type: "info",
    showCancelButton: false,
    confirmButtonClass: 'btn-info',
    confirmButtonText: 'Info!'
  });
};
document.querySelector('.success_swal').onclick = function(){
  swal({
    title: "Are you sure?",
    text: "You will not be able to recover this imaginary file!",
    type: "success",
    showCancelButton: false,
    confirmButtonClass: 'btn-success',
    confirmButtonText: 'Success!'
  });
};
document.querySelector('.warning_swal').onclick = function(){
  swal({
    title: "Are you sure?",
    text: "You will not be able to recover this imaginary file!",
    type: "warning",
    showCancelButton: false,
    confirmButtonClass: 'btn-warning',
    confirmButtonText: 'Warning!'
  });
};
document.querySelector('.danger_swal').onclick = function(){
  swal({
    title: "Are you sure?",
    text: "You will not be able to recover this imaginary file!",
    type: "error",
    showCancelButton: false,
    confirmButtonClass: 'btn-danger',
    confirmButtonText: 'Danger!'
  });
};
/*--End SweetLAlert --*/