$(document).ready(function() {
    var startDateInput = $('#startDate');
    var endDateInput = $('#endDate');

    $('.input-daterange').datepicker({
        format: 'yyyy-mm-dd',
        startDate: 'today',
        autoclose: true,
    });

    startDateInput.datepicker().on('changeDate', function() {
        // Automatically open the second calendar after the first date is selected
        endDateInput.datepicker('show');
    });

    $('#date-range-picker').on('changeDate', function() {
        var startDate = startDateInput.val();
    });
});