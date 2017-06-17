const express = require('express');
const router = express.Router();
var file = require('../../common/main')
var log = require('../libs/log')(module);
const ArticleModel = require('../libs/mongoose').ArticleModel;
const NewsModel = require('../libs/mongoose').NewsModel;

/* GET api listing. */
// router.get('/posts', (req, res) => {
//   console.log(file)
//   res.send(file);
// });

router.get('/main', function(req, res) {
    return ArticleModel.find(function (err, articles) {
        if (!err) {
            if(articles) {
                return res.send(articles);
            }else{
                console.log('errr')
                return '[]';
            }
            
        } else {
            res.statusCode = 500;
            log.error('Internal error(%d): %s',res.statusCode,err.message);
            return res.send({ error: 'Server error' });
        }
    });
});
router.post('/main', function(req, res) {
  log.info('post',req.body)
    var article = new ArticleModel({
        img: req.body.img,
        title: req.body.title,
        text: req.body.text
    });

    article.save(function (err) {
        if (!err) {
            log.info("article created");
            return res.send({ status: 'OK', article:article });
        } else {
            console.log('err', err);
            if(err.name == 'ValidationError') {
                res.statusCode = 400;
                res.send({ error: 'Validation error' });
            } else {
                res.statusCode = 500;
                res.send({ error: 'Server error' });
            }
            log.error('Internal error(%d): %s',res.statusCode,err.message);
        }
    });
});
router.get('/news/:id', function(req, res) {
    console.log('id params - ', req.params.id)
    return NewsModel.find(function (err, articles) {
        if (!err) {
            if(articles) {
                let sendData = [];
                articles.forEach(function (item) {
                    console.log('item', item)
                    let obj = {
                        id: item.year,
                        text: item.title
                    }
                    sendData.push(obj)
                })
                return res.send(sendData);
            }else{
                console.log('errr')
                return '[]';
            }
            
        } else {
            res.statusCode = 500;
            log.error('Internal error(%d): %s',res.statusCode,err.message);
            return res.send({ error: 'Server error' });
        }
    });
});
router.post('/news', function(req, res) {
  log.info('post',req.body)
    var article = new NewsModel({
        year: req.body.year,
        img: req.body.img,
        title: req.body.title,
        text: req.body.text
    });

    article.save(function (err) {
        if (!err) {
            log.info("article created");
            return res.send({ status: 'OK', article:article });
        } else {
            console.log('err', err);
            if(err.name == 'ValidationError') {
                res.statusCode = 400;
                res.send({ error: 'Validation error' });
            } else {
                res.statusCode = 500;
                res.send({ error: 'Server error' });
            }
            log.error('Internal error(%d): %s',res.statusCode,err.message);
        }
    });
});
module.exports = router;