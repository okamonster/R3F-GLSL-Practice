varying vec3 v_position;

float rect(vec2 pt, vec2 size, vec2 center) {
    vec2 p = pt - center;
    vec2 halfSize = size / 2.0;

    float horz = step(-halfSize.x, p.x) - step(halfSize.x, p.x);
    float vert = step(-halfSize.y, p.y) - step(halfSize.y, p.y);
    return horz * vert;
}

void main() {
    float inRect = rect(v_position.xy, vec2(1.0), vec2(0.0));

    vec3 color = vec3(1.0,0.0,0.0)*inRect;

    gl_FragColor = vec4(color,1.0);
}