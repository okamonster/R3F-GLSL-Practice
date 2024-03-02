varying vec3 v_position;
uniform float u_time;

void main() {
    vec3 color = vec3(0.0);
    color.r = smoothstep((sin(u_time)+1.0)/2.0,0.5, v_position.x);
    color.g = smoothstep((sin(u_time)+1.0)/2.0,0.5, v_position.y);
    gl_FragColor = vec4(color,1.0).rgba;
}