uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 uv = gl_FragCoord.xy / 1324.0;
    vec3 color = mix(vec3((sin(u_time*3.0)+1.0)/2.0,0.0,0.0),vec3(0.0,0.0,(cos(u_time)+1.0)/2.0),uv.x);
    gl_FragColor = vec4(color, 1.0);
}