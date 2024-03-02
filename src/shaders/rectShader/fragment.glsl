varying vec3 v_position;

float rect(vec2 pt, vec2 size, vec2 center) {
    vec2 p = pt - center;
    vec2 halfSize = size / 2.0;

    float horz = step(-halfSize.x, p.x) - step(halfSize.x, p.x);
    float vert = step(-halfSize.y, p.y) - step(halfSize.y, p.y);
    return horz * vert;
}

uniform float u_time;

mat2 getRotationMatrix(float theta) {
    float s = sin(theta);
    float c = cos(theta);
    return mat2(c, -s, s, c);
}

void main() {

    mat2 mat = getRotationMatrix(u_time);
    vec2 pt = mat * v_position.xy;
    float radius = 0.0;
    vec2 center = vec2(cos(u_time), sin(u_time)) * radius;
    float inRect = rect(pt, vec2(0.5), center);
    vec3 color = vec3(1.0,1.0,0.0)*inRect;

    gl_FragColor = vec4(color,1.0);
}