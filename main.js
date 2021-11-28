$(document).ready(function() {
    // Tooltips init
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    // Datepicker init
    $('.datepicker').datepicker();
});

// Update filter when user change the select
$('#statusFilter').on('change', function() {
    filterByStatus($(this).val());
});

// Show/Hide rows depending on the selected status filter
function filterByStatus(value) {
    let tableEl = $('#purchasesHistoryTable');

    if ( value === 'all' ) {
        tableEl.find('tr').removeClass('d-none');
    } else {
        tableEl.find('td.status').each( function() {
            if ( !$(this).find('.'+ value).length > 0 ) {
                $(this).closest('tr').addClass('d-none');
            } else {
                $(this).closest('tr').removeClass('d-none');
            }
        });
    }
}