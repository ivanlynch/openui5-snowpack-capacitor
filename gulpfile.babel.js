import {task, series, src, dest} from 'gulp';
import download from 'gulp-download';
import { execSync } from 'child_process';
import unzip from 'gulp-unzip';
import rename from 'gulp-rename';
import del from 'del';
import ui5preload from 'gulp-ui5-preload';
import uglify from 'gulp-uglify';
import gulpif from 'gulp-if';

let CONFIG = {
    URL: ''
};

task('CLEAN_FOLDER', done => {
    del(['./runtime.zip', './www/resources']).then(() => {
        done()
    })
})

task('GET_LATEST_MOBILE_RUNTINE', done => {

    CONFIG.URL = execSync(`curl -s https://api.github.com/repos/SAP/openui5/releases/latest | grep browser_download_url | grep openui5-runtime-mobile | cut -d '"' -f 4`).toString();
    
    download(CONFIG.URL)
        .pipe(dest('./'))
        .pipe(rename(function(path){
            path.basename = "runtime"
            path.extname = ".zip"
        }))
        .pipe(dest('./'))
        .on('end', () => {
            done()
        })
});

task('CREATE_RESOURCE_FOLDER', done => {
    src('./runtime.zip')
        .pipe(unzip())
        .pipe(dest('./www/'))
        .on('end', () => {
            del(['./runtime.zip', './openui5-runtime-mobile**'], done())
        })
})

task('DELETE_DEBUG_FILES', done => {
    del(['./www/**-dbg.js', './www/**/**-dbg.js']).then(() => {
        done();
    })
})

task('CREATE_COMPONENT_PRELOAD', () => {
    return src([
        'www/**/**.+(js|xml)', '!www/resources/**', '!www/Component-preload.js', '!gulpfile.js'
    ])
        .pipe(gulpif('www/**/*.js', uglify()))
        .pipe(ui5preload({
            base : '.', namespace : 'com/ws'
        }))
        .pipe(dest('www'))
});

export default series('CLEAN_FOLDER', 'GET_LATEST_MOBILE_RUNTINE', 'CREATE_RESOURCE_FOLDER', 'CREATE_COMPONENT_PRELOAD')