uniform vec2 u_resolution;
uniform float u_time;
varying vec2 v_uv;
varying vec3 v_position;

void main() {
    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(v_position.x+1.0, v_position.y+1.0, 0.0);
    gl_FragColor = vec4(color, 1.0);
}