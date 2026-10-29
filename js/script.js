<script>
    document.querySelectorAll('.btn').forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
</script>