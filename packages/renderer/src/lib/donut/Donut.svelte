<script lang="ts">
export let percent = 0;

export let size = 64;

export let title = '';

export let value: unknown;

function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  return ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(' ');
}

function getStoke() {
  if (percent < 50) {
    return 'green';
  } else if (percent < 75) {
    return 'orange';
  }
  return 'red';
}
</script>

<svg viewBox="0 0 {size + 10} {size + 20}" height="{size}" width="{size}">
  <circle fill="none" stroke="rgb(129, 129, 129)" stroke-width="5" r="{size / 2}" cx="{size / 2}" cy="{size / 2 + 5}"
  ></circle>
  <path
    id="arc1"
    fill="none"
    stroke="{getStoke()}"
    stroke-width="5"
    d="{describeArc(size / 2, size / 2 + 5, size / 2, 0, (percent * 360) / 100)}"></path>
  <text x="{size / 2}" y="37%" text-anchor="middle" class="text-xs stroke-gray-800">{title}</text>
  <text x="{size / 2}" y="51%" dominant-baseline="central" text-anchor="middle" class="text-sm stroke-gray-500"
    >{value}</text>
</svg>
