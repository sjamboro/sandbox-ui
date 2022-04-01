/* tslint:disable */
/* eslint-disable */
/**
 * Red Hat Openshift Smart Events Fleet Manager
 * The api exposed by the fleet manager of the RHOSE service.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: openbridge-dev@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { BaseAction } from './base-action';
import { BaseFilter } from './base-filter';
import { ManagedResourceStatus } from './managed-resource-status';

/**
 * 
 * @export
 * @interface ProcessorResponse
 */
export interface ProcessorResponse {
    /**
     * 
     * @type {string}
     * @memberof ProcessorResponse
     */
    'kind'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProcessorResponse
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProcessorResponse
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProcessorResponse
     */
    'href'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProcessorResponse
     */
    'submitted_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProcessorResponse
     */
    'published_at'?: string;
    /**
     * 
     * @type {ManagedResourceStatus}
     * @memberof ProcessorResponse
     */
    'status'?: ManagedResourceStatus;
    /**
     * 
     * @type {Set<BaseFilter>}
     * @memberof ProcessorResponse
     */
    'filters'?: Set<BaseFilter>;
    /**
     * 
     * @type {string}
     * @memberof ProcessorResponse
     */
    'transformationTemplate'?: string;
    /**
     * 
     * @type {BaseAction}
     * @memberof ProcessorResponse
     */
    'action'?: BaseAction;
}
