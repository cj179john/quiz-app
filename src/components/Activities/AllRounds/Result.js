import React from 'react';
import CacheService from '../../../services/CacheService';
import CommonResult from '../../Commons/CommonResult';
import {indexBy} from 'ramda';

const cacheService = new CacheService();

function Result(props) {
  const {activity, cacheName} = props;
  const cachedQuestions = indexBy((x) => x.id, cacheService.getItem(cacheName));

  return (
    <CommonResult activity={activity} questions={cachedQuestions} />
  );
};

export default Result;
