function getFinalGrade(exam, projects) {
switch (true) {
    case (exam > 90 || projects > 10):
        return 100;
        break;

    case (exam > 75 && projects >= 5):
        return 90;
        break;

    case (exam > 75 && projects >= 5):
        return 75;
        break;
    default:
        return 0;
    }
}
