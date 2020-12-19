function hasCollided(bulleta, walla){
    bulletaRightEdge=bulleta.x + bulleta.width;
    wallaLeftEdge=walla.x;
    if (bulletaRightEdge>=wallaLeftEdge){
        return true;
    }
    return false;
}