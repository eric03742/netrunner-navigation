/**
 * 'IDaaS' | 'xindun' | 'UC'
 */
export const CLIENT_TYPE = 'xindun';

const env = {
  dev: {
    BASE_URL: 'https://k8sdev.cscec3b-iti.com',
    ALIOSS_URL: 'https://oss-test.cscec3b-iti.com',
    LOGIN_URL: 'https://idaas-test.zj31.net/frontend/login#/login',
    CLIENT_ID: '955018f270c14a869f9f1dafc385f626',
    OUT_CLIENT_ID: 'c-top-out',
    TENANT_ID: '1702526044740067329',
    OUT_TENANT_ID: '1940217560097349634',
    RSA_PUB_KEY:
      'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCk4ydH566BdCx7G8Vrj6sgh7R6Ii0TdA5D7QJh8pjiL9FplqFNJbPn3SmhNQrhRdau94qkMoE3vYerwVUI5VUxfoQYwfBIVqduG5G3No48IZ8VuMHPG71R9dT+PLo+nR84V5o9T0a1eAWT/B5UwNhyThngm1oerX0qo5a1MYQI4QIDAQAB',
    PUBLIC_KEY:
      'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5HjZPGk2A16XgSU2zVax0LqSS6yIg5su1OjNNrkDGD78x9bg/yrh/trmgFbDB5VRcJgOVDz2jgkrur7rCY/0OvPDZLQjim71znpV2NDkzhFp1Bm8oHGvCYb//1bSKkqaIGs23wWiriKNkw16OD/skK5LB6IUGUfZTW0zVKNmu8HrM7K8Lft5KF5v+lIopfzY+g7/4HnbYoZ+5MOU89MJbZeQdPoxonaNA1Lfzlk2wH4q+ZCR4+iNbgZgDVYtDaVxLU+ayz5fiQ0hnqdJCAp/H1weYZ34zJJsZKvkGCyPGZ64Ll039DJTLkvr01FmhQ2VWbUEhP4ruVed5HtDhoW6NwIDAQAB',
  },
  test: {
    BASE_URL: 'https://k8stest.cscec3b-iti.com',
    ALIOSS_URL: 'https://oss-test.cscec3b-iti.com',
    LOGIN_URL: 'https://idaas-test.zj31.net/frontend/login#/login',
    CLIENT_ID: '955018f270c14a869f9f1dafc385f626',
    OUT_CLIENT_ID: 'c-top-out',
    XINDUN_CLIENT_ID: 'ctop123456',
    TENANT_ID: '1701899363694329857',
    OUT_TENANT_ID: '1940217560097349634',
    // 局根组织id
    CSCEC_3B_ORG_ID: 'ECB9335D15BF4023ADF85FA8E5E3FF61',
    XINDUN_AUTH_URL: 'https://dop-auth-test.cscec3b-iti.com/cas/oauth2.0/authorize',
    HAIR_REQUIREMENT_BASE_URL: 'https://ctop-test.cscec3b-iti.com/g3-ctop-hope/require',
    HAIR_EXPERT_BASE_URL: 'https://ctop-test.cscec3b-iti.com/g3-ctop-hope/expert',
    RSA_PUB_KEY:
      'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCk4ydH566BdCx7G8Vrj6sgh7R6Ii0TdA5D7QJh8pjiL9FplqFNJbPn3SmhNQrhRdau94qkMoE3vYerwVUI5VUxfoQYwfBIVqduG5G3No48IZ8VuMHPG71R9dT+PLo+nR84V5o9T0a1eAWT/B5UwNhyThngm1oerX0qo5a1MYQI4QIDAQAB',
    PUBLIC_KEY:
      'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5HjZPGk2A16XgSU2zVax0LqSS6yIg5su1OjNNrkDGD78x9bg/yrh/trmgFbDB5VRcJgOVDz2jgkrur7rCY/0OvPDZLQjim71znpV2NDkzhFp1Bm8oHGvCYb//1bSKkqaIGs23wWiriKNkw16OD/skK5LB6IUGUfZTW0zVKNmu8HrM7K8Lft5KF5v+lIopfzY+g7/4HnbYoZ+5MOU89MJbZeQdPoxonaNA1Lfzlk2wH4q+ZCR4+iNbgZgDVYtDaVxLU+ayz5fiQ0hnqdJCAp/H1weYZ34zJJsZKvkGCyPGZ64Ll039DJTLkvr01FmhQ2VWbUEhP4ruVed5HtDhoW6NwIDAQAB',
  },
  pre: {
    BASE_URL: 'https://k8spre.cscec3b-iti.com',
    ALIOSS_URL: 'https://g3-xingpan.oss-cn-shenzhen.aliyuncs.com',
    LOGIN_URL: 'https://idaas-test.zj31.net/frontend/login#/login',
    CLIENT_ID: '955018f270c14a869f9f1dafc385f626',
    OUT_CLIENT_ID: 'c-top-out',
    XINDUN_CLIENT_ID: 'ctop123456',
    TENANT_ID: '1701899363694329857',
    OUT_TENANT_ID: '1940217560097349634',
    // 局根组织id
    CSCEC_3B_ORG_ID: 'ECB9335D15BF4023ADF85FA8E5E3FF61',
    XINDUN_AUTH_URL: 'https://dop-auth-pre.cscec3b-iti.com/cas/oauth2.0/authorize',
    HAIR_REQUIREMENT_BASE_URL: 'https://ctop-pre.cscec3b-iti.com/g3-ctop-hope/require',
    HAIR_EXPERT_BASE_URL: 'https://ctop-pre.cscec3b-iti.com/g3-ctop-hope/expert',
    RSA_PUB_KEY:
      'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCk4ydH566BdCx7G8Vrj6sgh7R6Ii0TdA5D7QJh8pjiL9FplqFNJbPn3SmhNQrhRdau94qkMoE3vYerwVUI5VUxfoQYwfBIVqduG5G3No48IZ8VuMHPG71R9dT+PLo+nR84V5o9T0a1eAWT/B5UwNhyThngm1oerX0qo5a1MYQI4QIDAQAB',
    PUBLIC_KEY:
      'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5HjZPGk2A16XgSU2zVax0LqSS6yIg5su1OjNNrkDGD78x9bg/yrh/trmgFbDB5VRcJgOVDz2jgkrur7rCY/0OvPDZLQjim71znpV2NDkzhFp1Bm8oHGvCYb//1bSKkqaIGs23wWiriKNkw16OD/skK5LB6IUGUfZTW0zVKNmu8HrM7K8Lft5KF5v+lIopfzY+g7/4HnbYoZ+5MOU89MJbZeQdPoxonaNA1Lfzlk2wH4q+ZCR4+iNbgZgDVYtDaVxLU+ayz5fiQ0hnqdJCAp/H1weYZ34zJJsZKvkGCyPGZ64Ll039DJTLkvr01FmhQ2VWbUEhP4ruVed5HtDhoW6NwIDAQAB',
  },
  prod: {
    BASE_URL: 'https://k8s.cscec3b-iti.com',
    ALIOSS_URL: 'https://g3-xingpan.oss-cn-shenzhen.aliyuncs.com',
    LOGIN_URL: 'https://idaas.zj31.net/frontend/login#/login',
    CLIENT_ID: '955018f270c14a869f9f1dafc385f626',
    OUT_CLIENT_ID: 'c-top-out',
    XINDUN_CLIENT_ID: 'ctop123456',
    TENANT_ID: '1684090772031590401',
    OUT_TENANT_ID: '1940217560097349634',
    // 局根组织id
    CSCEC_3B_ORG_ID: 'ECB9335D15BF4023ADF85FA8E5E3FF61',
    XINDUN_AUTH_URL: 'https://dop-auth.cscec3b-iti.com/cas/oauth2.0/authorize',
    HAIR_REQUIREMENT_BASE_URL: 'https://c-top.cscec3b.com.cn/g3-ctop-hope/require',
    HAIR_EXPERT_BASE_URL: 'https://c-top.cscec3b.com.cn/g3-ctop-hope/expert',
    RSA_PUB_KEY:
      'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCk4ydH566BdCx7G8Vrj6sgh7R6Ii0TdA5D7QJh8pjiL9FplqFNJbPn3SmhNQrhRdau94qkMoE3vYerwVUI5VUxfoQYwfBIVqduG5G3No48IZ8VuMHPG71R9dT+PLo+nR84V5o9T0a1eAWT/B5UwNhyThngm1oerX0qo5a1MYQI4QIDAQAB',
    PUBLIC_KEY:
      'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5HjZPGk2A16XgSU2zVax0LqSS6yIg5su1OjNNrkDGD78x9bg/yrh/trmgFbDB5VRcJgOVDz2jgkrur7rCY/0OvPDZLQjim71znpV2NDkzhFp1Bm8oHGvCYb//1bSKkqaIGs23wWiriKNkw16OD/skK5LB6IUGUfZTW0zVKNmu8HrM7K8Lft5KF5v+lIopfzY+g7/4HnbYoZ+5MOU89MJbZeQdPoxonaNA1Lfzlk2wH4q+ZCR4+iNbgZgDVYtDaVxLU+ayz5fiQ0hnqdJCAp/H1weYZ34zJJsZKvkGCyPGZ64Ll039DJTLkvr01FmhQ2VWbUEhP4ruVed5HtDhoW6NwIDAQAB',
  },
  local: {
    BASE_URL: 'https://k8spt.cscec3b-iti.com',
    ALIOSS_URL: 'https://g3-xingpan.oss-cn-shenzhen.aliyuncs.com',
    CLIENT_ID: '1e0eca8a4819a5c70dc9d8cfbc7dc098',
    OUT_CLIENT_ID: 'c-top-out',
    TENANT_ID: '1701899363694329857',
    OUT_TENANT_ID: '1940217560097349634',
    RSA_PUB_KEY:
      'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCk4ydH566BdCx7G8Vrj6sgh7R6Ii0TdA5D7QJh8pjiL9FplqFNJbPn3SmhNQrhRdau94qkMoE3vYerwVUI5VUxfoQYwfBIVqduG5G3No48IZ8VuMHPG71R9dT+PLo+nR84V5o9T0a1eAWT/B5UwNhyThngm1oerX0qo5a1MYQI4QIDAQAB',
    PUBLIC_KEY:
      'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5HjZPGk2A16XgSU2zVax0LqSS6yIg5su1OjNNrkDGD78x9bg/yrh/trmgFbDB5VRcJgOVDz2jgkrur7rCY/0OvPDZLQjim71znpV2NDkzhFp1Bm8oHGvCYb//1bSKkqaIGs23wWiriKNkw16OD/skK5LB6IUGUfZTW0zVKNmu8HrM7K8Lft5KF5v+lIopfzY+g7/4HnbYoZ+5MOU89MJbZeQdPoxonaNA1Lfzlk2wH4q+ZCR4+iNbgZgDVYtDaVxLU+ayz5fiQ0hnqdJCAp/H1weYZ34zJJsZKvkGCyPGZ64Ll039DJTLkvr01FmhQ2VWbUEhP4ruVed5HtDhoW6NwIDAQAB',
  },
};

export default env;
