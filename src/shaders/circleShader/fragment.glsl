varying vec3 v_position;

void main() {
    float inCircle = 1.0 - step(1.0, length(v_position.xy));
    vec3 color = vec3(1.0,0.0,0.0) * inCircle;;
    gl_FragColor = vec4(color, 1.0);
}