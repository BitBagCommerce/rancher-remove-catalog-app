`rancher-remove-catalog-app` is GitHub action that removes Rancher's catalog app using Rancher's API.

### Running as a Github action

```yaml
  -     name: Install app
        uses: BitBagCommerce/rancher-remove-catalog-app@v0.1
        with:
            appName: 'some-app'
            appNamespace: 'some-namespace'
            rancherToken: ${{ secrets.RANCHER_BEARER_TOKEN }}
            rancherUrl: ${{ secrets.RANCHER_URL }}
```
## License

Copyright © 2022, BitBagCommerce. Released under the [MIT License](LICENSE).
