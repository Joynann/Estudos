export default function initToolTip()
{
    const tooltips = document.querySelectorAll('[data-tooltip]');

    if(tooltips)
    {
        function onMouseOver()
        {
            const tooltip = criarToolTip(this);
            onMouseMove.tooltip = tooltip;
            onMouseLeave.tooltip = tooltip;
            onMouseLeave.element = this;
            this.addEventListener('mousemove', onMouseMove);
            this.addEventListener('mouseleave', onMouseLeave);
        }
        
        function criarToolTip(map)
        {
            const tooltip = document.createElement('div');
            tooltip.innerHTML = map.getAttribute('aria-label');
            tooltip.classList.add('tooltip');
            document.body.appendChild(tooltip);
            return tooltip;
        }
        
        const onMouseMove =
        {
            handleEvent(e)
            {
                this.tooltip.style.top = e.pageY + 20 + 'px';
                this.tooltip.style.left = e.pageX + 20 + 'px';
            }
        }
        
        const onMouseLeave =
        {
            handleEvent()
            {
                document.body.removeChild(this.tooltip);
                this.element.removeEventListener('mouseleave', onMouseLeave);
                this.element.removeEventListener('mousemove', onMouseMove);
            }
        }
        
        tooltips.forEach((i) =>
        {
            i.addEventListener('mouseover', onMouseOver);
        });
    }
}