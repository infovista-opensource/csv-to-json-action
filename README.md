# Github CSV to JSON action

Split CSV string into a JSON object suitable for downstream matrix jobs.

## Inputs
- `string`, string to be split
- `split-by`, string/char to be used as the delimiter to split the string (default `,`)
- `name`, string with the JSON array (default `array`)

## Output
Object containing a JSON array
```json
{
    'arrayname': ['first','second']
}
```

## Example Usage

```yml
- uses: infovista-opensource/csv-to-json-action@v1
  id: split
  with:
    string: 'aaa,bbb'
    name: 'arrayname'
- run: | 
    echo "${{ steps.split.outputs.arrayname}}"
  ```